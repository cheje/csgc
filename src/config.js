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
            description: 'Scroll through to see residential buildings with residential that have been covered by local news outlets for reasons that might suggest speculation on the part of the owner.',
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
            id: '2028420065',
            title: '1387 Grand Concourse, Bronx',
            //image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam metus augue, faucibus sed bibendum vel, aliquam quis dui. Integer convallis metus ac nisl dignissim vestibulum. Maecenas eget fermentum dui, sit amet laoreet odio. Etiam eu ligula vulputate, tristique mi id, tristique arcu. Etiam ac nunc augue. In at tellus turpis. Pellentesque molestie porttitor egestas. Pellentesque tempus metus leo, eu viverra est luctus id. Vestibulum ac ipsum dictum justo dignissim molestie quis nec massa. Ut egestas vitae turpis eget fermentum.',
            location: {
                center: [-73.914617, 40.838445],
                zoom: 18,
                pitch: 75,
                bearing: -30
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
            id: '2031560027',
            title: '2055 Anthony Avenue, Bronx',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum purus vitae erat suscipit scelerisque. Proin nisi nulla, varius a aliquet vel, aliquam ac enim. Nam euismod tellus vitae dui lobortis malesuada. Nullam nisl urna, hendrerit sed tincidunt ut, facilisis ac tellus. Vivamus ut arcu quis diam molestie varius.',
            location: {
                center: [-73.9025, 40.8525],
                zoom: 18,
                pitch: 75,
                bearing: 25
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '3086830075',
            title: '3100 Brighton 2 Street, Brooklyn',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum purus vitae erat suscipit scelerisque. Proin nisi nulla, varius a aliquet vel, aliquam ac enim. Nam euismod tellus vitae dui lobortis malesuada. Nullam nisl urna, hendrerit sed tincidunt ut, facilisis ac tellus. Vivamus ut arcu quis diam molestie varius.',
            location: {
                center: [-73.9652, 40.576],
                zoom: 18,
                pitch: 75,
                bearing: 25
            },
            onChapterEnter: [],
            onChapterExit: [
                // {
                //     layer: 'gnpglaciers-2015',
                //     opacity: 0
                // }
            ]
        }
    ]
};

export default config;