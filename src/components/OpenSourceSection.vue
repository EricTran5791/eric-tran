<template>
  <div class="open-source-section">
    <section-header
        text="Open Source Contributions"
        v-bind:light-text="true"/>
    <div class="open-source-section__desc">{{ description }}</div>
    <div class="repository-container">
      <div
        class="repository"
        v-for="(item, index) in repositories"
        :key="index">
        <a
          class="repository__name"
          v-bind:href="item.node.url"
          target="_blank"
          rel="noopener noreferrer">
          {{ item.node.name }}
        </a>
        <div class="repository__desc">
          {{ item.node.description }}
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import SectionHeader from './SectionHeader.vue';
import { ApolloClient, HttpLink } from 'apollo-client-preset';
import { InMemoryCache } from 'apollo-cache-inmemory'
import queryRepositories from '../queries/repositories.graphql';

class OpenSourceSection extends Vue {
  envGitHubToken: string;
  description: string;
  repositories: any[] = [];
}
declare const process: any;

export default {
  components: { SectionHeader },
  data() {
    return {
      envGitHubToken: '',
      description: 'Here are some of my latest GitHub contributions.',
      repositories: []
    }
  },
  created(this: OpenSourceSection) {
    this.envGitHubToken = process.env.GITHUB_TOKEN;

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
} as ComponentOptions<OpenSourceSection>;
</script>

<style lang="scss">
.open-source-section {
  background-color: $colorBlack;
  background: linear-gradient($colorBlack, darken($colorBlack, 10));
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $marginSection;

  @media (max-width: $mediaPhone) {
    padding: $marginSection/2 $margin;
  }

  &__desc {
    color: $colorWhite;
    margin: $margin*2 0;
  }
}

.repository-container {
  display: flex;
  flex-direction: column;
}

.repository {
  @include card($colorWhite);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: $margin*2 0;
  text-align: center;

  @media (max-width: $mediaPhone) {
    margin: $margin 0;
  }

  &__name {
    color: $colorBlack;
    @include font-header(false);
    text-decoration: none;
  }

  &__desc {
    color: $colorBlack;
  }
}
</style>