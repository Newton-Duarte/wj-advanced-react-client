// const logo = /* GraphQL */ `
//   fragment logo on LandingPage {
//     logo {
//       data {
//         attributes {
//           ...imageData
//         }
//       }
//     }
//   }
// `;

export const GET_LANDING_PAGE = /* GraphQL */ `
  query GET_LANDING_PAGE {
    landingPage {
      data {
        id
        attributes {
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
