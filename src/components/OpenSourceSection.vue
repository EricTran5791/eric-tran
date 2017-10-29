<template>
  <div class="open-source-section">
    <section-header
        text="Open Source Contributions"
        v-bind:light-text="true"/>

    <div class="open-source-section__desc">{{description}}</div>

    <div class="repository-container">
      <div
        class="repository"
        v-for="(item, index) in repositories"
        :key="index">
        <div class="repository__name">
          {{item.node.name}}
        </div>
        <div class="repository__desc">
          {{item.node.description}}
        </div>
        <button-link
          v-bind:link="{text: 'Link', url: item.node.url}"
          iconClass="open_in_new"/>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import SectionHeader from './SectionHeader.vue';
import ButtonLink from './ButtonLink.vue';
import { envGitHubToken } from './mixins/env-github-token';
import { ApolloClient, HttpLink } from 'apollo-client-preset';
import { InMemoryCache } from 'apollo-cache-inmemory'
import queryRepositories from '../queries/repositories.graphql';

@Component({
  components: { SectionHeader, ButtonLink },
  mixins: [envGitHubToken]
})
export default class OpenSourceSection extends Vue {
  envGitHubToken: string;
  description: string = "Here are the latest repositories that I have contributed to.";
  repositories: any[] = [];

  created() {
    const client = new ApolloClient({
        link: new HttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              authorization: `bearer ${this.envGitHubToken}`
            }
        }),
        cache: new InMemoryCache(),
    });

    client
      .query({ query: queryRepositories })
      .then((response: any) => { // TODO: Type the response
        this.repositories = response.data.user.contributedRepositories.edges;
      });

  }
}
</script>

<style lang="scss">
.open-source-section {
  background-color: $colorBlack;
  color: $colorWhite;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $marginSection $margin*2;

  @media (max-width: $mediaPhone) {
    padding: $marginSection/2 $margin;
  }

  &__desc {
    margin-top: $margin*2;
  }
}

.repository-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: $margin*2;
  margin-top: $margin*2;
}

.repository {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__name {
    @include font-header(false);
  }

  &__desc {
    text-align: center;
  }
}
</style>