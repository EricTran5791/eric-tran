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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $marginSection;

  @media (max-width: $mediaPhone) {
    padding: $marginSection/2 $margin;
  }

  &__desc {
    color: $colorWhite;
    margin-top: $margin*2;
  }
}

.repository-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: $margin*4;
  margin-top: $margin*4;

  @media (max-width: $mediaPhone) {
    grid-template-columns: 1fr;
  }
}

.repository {
  @include card($colorWhite);
  display: flex;
  flex-direction: column;
  align-items: center;

  &__name {
    color: $colorBlack;
    @include font-header(false);
    text-align: center;
    text-decoration: none;
    margin-bottom: $margin;
  }

  &__desc {
    color: $colorBlack;
    text-align: center;
  }
}
</style>