<template>
  <div class="open-source-section">
    <section-header
        text="Open Source Contributions"
        v-bind:light-text="true"/>
    <div class="open-source-section__desc">{{ description }}</div>
    
    <div class="contribution-container">
      <div
        class="contribution"
        v-for="(item, index) in openSourceContributions"
        v-bind:class="{
          'contribution--commit': item.type === 'Commit',
          'contribution--issue': item.type === 'Issue',
          }"
        :key="index">
        <i class="contribution__icon material-icons" v-if="item.type === 'Commit'">assignment</i>
        <i class="contribution__icon material-icons" v-else>report_problem</i>
        <div class="contribution__text-container">
          <a
            class="contribution__repository-name"
            v-bind:href="item.url"
            target="_blank"
            rel="noopener noreferrer">
            {{ item.repositoryName }}
          </a>
          <div class="contribution__type">
              {{ item.type }}            
          </div>
        </div>
      </div>

      <a
        class="github-badge-link-container"
        v-bind:href="githubLink"
        target="_blank"
        rel="noopener noreferrer">
        <div class="github-badge">
          <div class="github-badge__text">
            View my GitHub Profile
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { ComponentOptions } from 'vue';
import SectionHeader from './SectionHeader.vue';
import { ApolloClient, HttpLink } from 'apollo-client-preset';
import { InMemoryCache } from 'apollo-cache-inmemory'
import queryCommits from '../queries/commits.graphql';
import queryIssues from '../queries/issues.graphql';
import { OpenSourceContribution, OpenSourceContributionType } from '../types';
import { mapGetters } from 'vuex';

class OpenSourceSection extends Vue {
  envGitHubToken: string;
  description: string;
}
declare const process: any;

export default {
  components: { SectionHeader },
  data() {
    return {
      envGitHubToken: '',
      description: 'Here are some of my latest GitHub contributions.'
    }
  },
  computed: mapGetters([
    'openSourceContributions',
    'githubLink'
  ]),
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
      .query({ query: queryCommits })
      .then((response: any) => { // TODO: Type the response
        const data: any[] = response.data.viewer.repositoriesContributedTo.nodes;
        const commits = data.map(data => {
          const commitData = data.ref.target.history.nodes[0];
          const contribution: OpenSourceContribution = {
            repositoryName: data.name,
            type: OpenSourceContributionType.Commit,
            date: commitData.committedDate,
            url: commitData.commitUrl
          }
          return contribution;
        });
        this.$store.commit('addOpenSourceContributions', commits);
      });

    client
      .query({ query: queryIssues })
      .then((response: any) => { // TODO: Type the response
        const data: any[] = response.data.viewer.issues.nodes;
        const issues = data.map(data => {
          const contribution: OpenSourceContribution = {
            repositoryName: data.repository.name,
            type: OpenSourceContributionType.Issue,
            date: data.updatedAt,
            url: data.url
          }
          return contribution;
        });
        this.$store.commit('addOpenSourceContributions', issues);
      });
  }
} as ComponentOptions<OpenSourceSection>;
</script>

<style lang="scss">
.open-source-section {
  background-color: $colorPrimary;
  background: linear-gradient($colorPrimary, darken($colorPrimary, 10));
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

.contribution-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: $margin*2;

  @media (max-width: $mediaPhone) {
    grid-template-columns: 1fr;
    grid-gap: $margin;
  }
}

.contribution {
  @include card($colorWhite);
  display: flex;
  align-items: center;
  width: 300px;

  @media (max-width: 500px) {
    width: 270px;
    box-sizing: border-box;
  }

  &__icon {
    user-select: none;
    font-size: 48px;
    margin-right: $margin;
  }

  &__text-container {
    display: flex;
    flex-direction: column;
  }

  &__repository-name {
    color: $colorBlack;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
  }
}

.github-badge-link-container {
  color: transparent;
}

.github-badge {
  @include card($colorBlack);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &__text {
    color: white;
  }
}
</style>