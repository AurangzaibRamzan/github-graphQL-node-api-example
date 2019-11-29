const query = `{
  viewer {
    name
    pinnedItems(first: 10, types: REPOSITORY) {
      edges {
        node {
          ... on Repository {
            id
            name
            createdAt
            description
            isArchived
            isPrivate
            url
            defaultBranchRef {
              target {
                ... on Commit {
                  additions
                  history(first: 10) {
                    totalCount
                  }
                }
              }
            }
            owner {
              login
              id
              __typename
              url
            }
            assignableUsers {
              totalCount
            }
            licenseInfo {
              key
            }
          }
        }
      }
    }
  }
}
`;

module.exports = query;
