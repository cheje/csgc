import delancey from './../img/delancey-orchard.png'
import cherry from './../img/cherry-south.png'
import kent from './../img/kent.png'
import vernon from './../img/vernon.png'
import nblvd from './../img/nblvd.png'

export const config = {
  style: 'mapbox://styles/jenche/ckxy9mihs40ew14phbjizimgm',
  accessToken: `${process.env.REACT_APP_MAPBOX_TOKEN}`,
  showMarkers: false,
  alignment: 'right',
  theme: 'light',
  chapters: [
    {
      id: '',
      title: 'In the News',
      description:
        'Scroll through to see media coverage of planned developments and other reasons that might lead to property speculation for neighboring buildings. Included is the expense (as percentage of income) history of a residential building in the area to see whether there have been increases, decreases or consistently low percentages over time.',
      location: {
        center: [-74.006, 40.7128],
        zoom: 10,
        pitch: 60,
        bearing: 0,
      },
    },
    {
      id: '1002470001, 1002460001',
      title: '267 Cherry Street, 275 South Street (Manhattan)',
      image: cherry,
      description: `According to <a href="https://boweryboogie.com/2021/11/chetrit-buys-into-two-bridges-waterfront-while-starrett-lists-for-100m/" target="_blank" rel="noopener noreferrer">Bowery Boogie</a>, a seventy-story, two-tower development is planned for the Lower East Side waterfront at 265 South Street. How might that impact tenants in surroundings buildings? The expenses history of two of those:`,
      link: `(<a href="${cherry}">enlarge image</a>)`,
      location: {
        center: [-73.98904, 40.71183],
        zoom: 16.5,
        pitch: 75,
        bearing: -20,
      },
    },
    {
      id: '1004090043, 1004090002',
      title: '101 Delancey Street, 96 Orchard Street (Manhattan)',
      image: delancey,
      description: `A "controversial landlord" purchased the Sago Hotel (120 Allen Street) on the Lower East Side near the corner of Delancey and Allen for $8.5 million, reports <a href="https://boweryboogie.com/2021/06/landlord-michael-shah-nabs-sago-hotel-on-orchard-street-for-8-5m/" target="_blank" rel="noopener noreferrer">Bowery Boogie</a>. He also bought 96 Orchard Street, the expenses snapshot of which along with another building in the area is shown below:`,
      link: `(<a href="${delancey}">enlarge image</a>)`,
      location: {
        center: [-73.98891, 40.71849],
        zoom: 17,
        pitch: 58.5,
        bearing: -30,
      },
    },
    {
      id: '3023770002',
      title: '252 Kent Avenue (Brooklyn)',
      description: `In December 2021, the City Council approved River Ring, a "massive new development on the Williamsburg waterfront," reports <a href="https://www.brooklynpaper.com/city-council-votes-to-approve-river-ring-clearing-the-way-for-massive-waterfront-williamsburg-development/" target="_blank" rel="noopener noreferrer">Brooklyn Paper</a>. What might that mean for the tenants of neighboring buildings? Such as this one:`,
      image: kent,
      link: `(<a href="${kent}">enlarge image</a>)`,
      location: {
        center: [-73.96614, 40.71654],
        zoom: 17,
        pitch: 60,
        bearing: 65,
      },
    },
    {
      id: '4000460050',
      title: '47-07 Vernon Boulevard, 10-12 47 Avenue (Queens)',
      description: `According to a survey, Hunters Point in Long Island City is the "third most apartment-crazed neighborhood" in the U.S., writes <a href="https://qns.com/2021/12/new-survey-shows-hunters-point-is-third-most-apartment-crazed-neighborhood-in-u-s/" target="_blank" rel="noopener noreferrer">QNS</a>. The nearly 5,500 new rental units added to Hunters Point in the past five years make up 53% of all new apartments in Queens. See the expense history of two buildings in the neighborhood:`,
      image: vernon,
      link: `(<a href="${vernon}">enlarge image</a>)`,
      location: {
        center: [-73.95296, 40.74519],
        zoom: 16,
        pitch: 60,
        bearing: 0,
      },
    },
    {
      id: '4017210008',
      title: '106-18 Northern Boulevard (Queens)',
      description: `According to <a href="https://qns.com/2021/05/planned-25-story-luxury-development-in-corona-slated-for-completion-in-2024/" target="_blank" rel="noopener noreferrer">QNS</a>, a high-end hotel and luxury residential development is planned for Corona on Northern Boulevard. How might that affect residents of nearby buildings? The expense percentage of this one has risen in the past few years:`,
      image: nblvd,
      link: `(<a href="${nblvd}">enlarge image</a>)`,
      location: {
        center: [-73.86213, 40.75752],
        zoom: 17,
        pitch: 50,
        bearing: -20,
      },
    },
  ],
}
