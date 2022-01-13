var config = {
    style: 'mapbox://styles/jenche/ckxy9mihs40ew14phbjizimgm',
    accessToken: `${process.env.REACT_APP_MAPBOX_TOKEN}`,
    showMarkers: false,
    alignment: 'right',
    theme: 'light',
    //title: 'Glaciers of Glacier National Park',
    //subtitle: 'Change in coverage from 1998 to 2015',
    //byline: '',
    //footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: '',
            //title: 'Distressed Buildings',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Scroll through to see residential buildings that have been covered by local news outlets for reasons that might suggest speculation on the part of the owner.',
            location: {
                center: [-74.006, 40.7128],
                zoom: 10,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'gnpglaciers-1998',
                //     opacity: 0.25
                // },
                // {
                //     layer: 'glaciernp-boundary',
                //     opacity: 0.25
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'glaciernp-boundary',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '1002470001',
            title: '247 Cherry Street, 275 South Street (Manhattan)',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Two Bridges highrises planned for the Lower East Side waterfront',
            link: 'https://boweryboogie.com/2021/11/chetrit-buys-into-two-bridges-waterfront-while-starrett-lists-for-100m/',
            headline: 'Chetrit Buys into Two Bridges Waterfront While Starrett Lists for $100M',
            location: {
                center: [-73.98904, 40.71183],
                zoom: 16.5,
                pitch: 75,
                bearing: -20
            }
        },
        {
            id: '1004090043',
            title: '101 Delancey Street, 130 Orchard Street (Manhattan)',
            //image: '',
            description: '',
            link: 'https://boweryboogie.com/2021/06/landlord-michael-shah-nabs-sago-hotel-on-orchard-street-for-8-5m/',
            headline: 'Landlord Michael Shah Nabs Sago Hotel on Orchard Street for $8.5M',
            location: {
                center: [-73.98891, 40.71849],
                zoom: 18,
                pitch: 75,
                bearing: 25
            }
        },
        {
            id: '3023770002',
            title: '252 Kent Avenue (Brooklyn)',
            description: '',
            link: 'https://www.brooklynpaper.com/city-council-votes-to-approve-river-ring-clearing-the-way-for-massive-waterfront-williamsburg-development/',
            headline: 'City Council votes to approve River Ring, clearing the way for massive waterfront Williamsburg development',
            location: {
                center: [-73.96614, 40.71654],
                zoom: 17,
                pitch: 75,
                bearing: 25
            }
        },
        {
            id: '3011920085',
            title: '1035 Washington Avenue (Brooklyn)',
            description: '',
            link: 'https://www.brooklynpaper.com/locals-blast-proposed-crown-heights-development-at-city/',
            headline: 'Locals blast proposed Crown Heights development at City Planning Hearing',
            location: {
                center: [-73.96066, 40.66445],
                zoom: 18,
                pitch: 75,
                bearing: 25
            }
        },
        {
            id: '4000460050',
            title: '47-07 Vernon Boulevard, 10-12 47 Avenue (Queens)',
            description: '',
            link: 'https://qns.com/2021/12/new-survey-shows-hunters-point-is-third-most-apartment-crazed-neighborhood-in-u-s/',
            headline: 'Hunters Point New survey shows Hunters Point is third most apartment-crazed neighborhood in U.S.',
            location: {
                center: [-73.95296, 40.74519],
                zoom: 18,
                pitch: 75,
                bearing: 25
            }
        },
        {
            id: '4017210008',
            title: '106-18 Northern Boulevard (Queens)',
            description: '',
            link: 'https://qns.com/2021/05/planned-25-story-luxury-development-in-corona-slated-for-completion-in-2024/',
            headline: 'Corona Planned 25-story luxury development in Corona slated for completion in 2024',
            location: {
                center: [-73.86213, 40.75752],
                zoom: 18,
                pitch: 75,
                bearing: 25
            }
        }
    ]
};

export default config;