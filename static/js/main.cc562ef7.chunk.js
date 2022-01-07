(this["webpackJsonpreact-capstone"]=this["webpackJsonpreact-capstone"]||[]).push([[0],{156:function(e,t,a){e.exports=a(180)},162:function(e,t,a){},180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(67),o=a.n(i);a(3);function s(){return r.a.createElement("div",{className:"header"},r.a.createElement("section",null,r.a.createElement("h1",{className:"header--title"},"Disrepair, Displacement and Distress"),r.a.createElement("h3",{className:"header--subhead"},"Finding Housing Stories Through Data Visualizations"),r.a.createElement("p",{style:{marginTop:"-15px",fontWeight:"bold",textTransform:"uppercase",fontFamily:"Roboto Condensed",fontSize:"0.85em"}},"By Jennifer Cheng"),r.a.createElement("p",{style:{fontStyle:"italic",fontFamily:"Roboto",fontSize:"0.8em",lineHeight:"1.2"}},"This project comprises the digital component of the capstone requirement for the Data Analysis and Visualization M.S. program at the CUNY Graduate Center. The text below pulls from portions of the white paper.")))}function l(){return r.a.createElement("div",null,r.a.createElement("section",{style:{paddingTop:"50px"}},r.a.createElement("p",null,'In the first year of the COVID-19 pandemic, news and opinion headlines in New York City\u2019s leading newspapers painted, for some audiences, an alarming effect on city real estate \u2013 rich neighborhoods "',r.a.createElement("a",{href:"https://www.nytimes.com/interactive/2020/05/15/upshot/who-left-new-york-coronavirus.html",target:"_blank"},"emptied out"),'", the pandemic has "',r.a.createElement("a",{href:"https://nypost.com/2020/07/10/covid-19-has-broken-nycs-housing-market/",target:"_blank"},"broken"),'" the housing market, data show a "',r.a.createElement("a",{href:"https://nypost.com/2020/11/14/new-stats-reveal-massive-nyc-exodus-amid-coronavirus-crime/",target:"_blank"},"massive NYC exodus"),'." Then, just a year later, still amid the pandemic, the housing market has "',r.a.createElement("a",{href:"https://www.nytimes.com/2021/10/05/realestate/new-york-real-estate-sales.html",target:"_blank"},"surged"),'", "',r.a.createElement("a",{href:"https://www.nytimes.com/2021/12/29/nyregion/chelsea-nyc-coronavirus.html",target:"_blank"},"bounce[d] back"),'", "made a ',r.a.createElement("a",{href:"https://www.nytimes.com/2021/12/31/realestate/in-2021-new-yorks-housing-market-made-a-stunning-comeback.html",target:"_blank"},"stunning comeback"),'", and "',r.a.createElement("a",{href:"https://www.wsj.com/articles/manhattan-luxury-home-sales-skyrocketed-in-2021-11641301201",target:"_blank"},"skyrocketed"),'." These headlines would suggest that real estate has not just recovered, but could be on the verge of a boom, to follow the cycle described in the report "Corporate Windfalls or Social Housing Conversions?" released in November 2020 by the nonprofit Community Service Society of New York. The market undulates from a high at the "euphoria" stage to a low at the "crisis" stage but despite these contrasting names, for speculators and investors, each stage whether high or low strike to make money while for many tenants living in buildings of interest, the cycle appears more as a line, of ongoing rent increases and lack of maintenance (Hornbach et al. 4). The pandemic certainly initiated extraordinary circumstances that left many unable to pay their rent and debts mounted for both tenants and landlords, with foreclosures seemingly inevitable.'),r.a.createElement("p",null,"But at the root of these tensions is the reality that tenant fears of displacement, a lack of building maintenance, changing ownership, stretch back to years before the pandemic. A tendency of some city landlords and and investors to take questionable approaches in the pursuit of profit stem back a quarter of a century (3). The practice of perceiving housing as an investment vehicle for making profits is described as real estate speculation. In pursuit of profit, landlords can end up engaging in predatory practices that drive out long-time tenants in favor of higher-income occupants (Klein et al. 19). The headlines and the real estate cycle, obscure the reality for many renters,\xa0in a city where ",r.a.createElement("a",{href:"https://furmancenter.org/stateofthecity/view/state-of-renters-and-their-homes",target:"_blank"},"two-thirds rent")," their home \u2013\xa0that much of the housing crises of the past nearly two years did not emerge during the onset of the pandemic; rather the pandemic exacerbated a housing market debacle some 25 years in the making."),r.a.createElement("p",null,"For my capstone project, with the precarious NYC housing market, and speculation, as the backdrop, I will explore a dataset of Tax Commission Income and Expense (TCIE) filings and see how data visualizations can help navigate the contents and potentially find stories of displacement and distress.")))}function c(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h4",{className:"text subhead"},"The Dataset"),r.a.createElement("p",null,"The dataset comes from Barbara Gray, the chief librarian at the Craig Newmark Graduate School of Journalism at CUNY, who submitted a FOIL request as part of her ongoing Landlords Project. This information on the income and expenses of city landlords, in conjunction with other datasets, can reveal the complexities and trends of the persisting housing crisis in New York and its impact on housing equity. The data originates from the NYC Department of Taxation and Finance and contains what landlords make and spend. The city requires owners of buildings with 10 or more income-generating units that amount to more than $40,000, to file income and expense statements (LINK) with the Department of Finance on a yearly basis. While these forms are considered private and exempt from FOIL request, it is when the landlord appeals their tax bill, and files a Tax Commission Income and Expense form, that the data can be FOILed. The dataset spans from 2005 through 2020 (the respective incomes and expenses are of the previous year), with 2008, 2013 and 2017 filings still to be received. This set of filings over time tells us how these variables, in association with individual buildings, changed over time. While the dataset does not contain every landlord's income and expenses, the large number of those who challenge their tax bill amounts a good sample of tens of thousands per year. Given these individual filings, in cases where a building appears in multiple years, we can observe outliers in terms of, for example, income increases that might suggest profit-driven tendencies. And with this sizable number of data points, we also have a historical snapshot of how a landlord's rent-stabilized income versus their market-rate income has changed. An increase in the latter would imply that they flipped rent-stabilized units to market-rate, and in the process displace tenants in pursuit of maximizing  assets.")))}var h=a(71),d=a(1);function p(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){d.c("https://gist.githubusercontent.com/cheje/03a298076db3822e04faaf9b21aadf80/raw/68676b3d01476af66d2bd461136978b655c610b6/tcie-bars.csv").then((function(t){var a=Object(h.a)(new Set(t.map((function(e){return e.tcie_year}))));a.push("2007","2012","2016"),a.sort(),a.keys(),console.log(a);var n=["Manhattan","Bronx","Brooklyn","Queens","Staten Island"];console.log(n);var r={width:.8*window.innerWidth,height:.6*window.innerHeight,margin:{top:10,bottom:50,left:90,right:50}};r.boundedWidth=r.width-r.margin.left-r.margin.right,r.boundedHeight=r.height-r.margin.top-r.margin.bottom;var i=d.m(e.current).attr("width",r.width).attr("height",r.height),o=d.j().domain(a).range([r.margin.left,r.boundedWidth]).padding([.2]),s=d.k().domain([0,16e3]).range([r.boundedHeight,r.margin.left]).nice(),l=d.b().tickFormat("").tickSize(-r.boundedWidth+r.margin.left).scale(s);i.append("g").attr("class","y-gridlines").attr("transform","translate(".concat(r.margin.left,", 0)")).call(l);var c=d.l().domain(n).range(["#355070","#6d597a","#b56576","#e56b6f","#eaac8b"]),p=d.o().keys(n)(t);i.append("g").selectAll("g").data(p).join("g").attr("fill",(function(e){return c(e.key)})).selectAll("rect").data((function(e){return e})).join("rect").attr("x",(function(e){return o(e.data.tcie_year)})).attr("y",(function(e){return s(e[1])})).attr("height",(function(e){return s(e[0])-s(e[1])})).attr("width",o.bandwidth());var u=d.a(o).ticks(a.length).tickSizeOuter(0);i.append("g").attr("class","x-axis").attr("transform","translate(0, ".concat(r.boundedHeight,")")).call(u).style("text-anchor","middle").attr("dy","1em").append("text").attr("x","50%").attr("dy","3.5em").text("Year of TCIE Filing");var m=d.b(s);i.append("g").attr("class","y-axis").attr("transform","translate(".concat(r.margin.left,", 0)")).call(m).append("text").attr("y","-5em").attr("dx","-8%").attr("transform","rotate(270)").text("Number of TCIE BBLs Found in PLUTO");var f=n.reverse();i.append("g").selectAll("squares").data(f).join("rect").attr("x","90%").attr("y",(function(e,t){return 90+20*t})).attr("height",10).attr("width",10).style("fill",(function(e){return c(e)})),i.append("g").selectAll("labels").data(f).join("text").attr("x","91.5%").attr("y",(function(e,t){return 100+20*t})).style("fill",(function(e){return c(e)})).text((function(e){return e})).style("font-family","Roboto").style("font-size","0.75em"),i.append("text").attr("y","2em").text("TCIE Filings by Borough").attr("class","chart--title")}))}),[]),r.a.createElement("div",null,r.a.createElement("svg",{ref:e,style:{display:"block",margin:"auto"}},r.a.createElement("g",null)))}function u(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h4",{className:"subhead"},"Pulling in Other Datasets"),r.a.createElement("p",null,'In "',r.a.createElement("a",{href:"https://medium.com/justfixnyc/examining-the-myth-of-the-mom-and-pop-landlord-6f9f252a09c",target:"_blank"},"Examining the Myth of the 'Mom-and-Pop' Landlord"),'," Sam Rabiyah, the data lead and engineer at the housing justice organization ',r.a.createElement("a",{href:"https://www.justfix.nyc/",target:"_blank"},"JustFix.nyc"),', details key findings of the group\'s analysis of city landlords who owned rent-regulated housing properties. "Larger landlords," or those with a sizable portfolio of more than 20 buildings, own about half of the city\'s rent-regulated properties. Also of note, larger landlords conducted "more than half of all executed evictions in 2018."'),r.a.createElement("p",null,"To conduct their study, JustFix.nyc used its ",r.a.createElement("a",{href:"https://whoownswhat.justfix.nyc/",target:"_blank"},"Who Owns What")," database tool to \"rebalance the power dynamic between landlords and tenants\" and let users map the expanse of their landlord's portfolio using an algorithm based on the NYC Department of Housing Preservation and Development's registration data for residential properties. The database also ",r.a.createElement("a",{href:"https://whoownswhat.justfix.nyc/en/how-it-works",target:"_blank"},"pulls from numerous publicly available housing-related data")," from the city agencies and advocacy organizations. Such projects of gathering these various datasets such as housing violations, 311 maintenance complaints, evictions, among others, in a central searchable location and including maps and other visuals have also been done by other housing groups and government agencies. These sources provide a comprehensive view for tenants and advocates see whether their residential building or neighborhood, or others of interest, possess troubling signs. Joining different datasets together also shows the multitude of potential indicators of speculation, with many of that data being publicly available. I gathered some of these databases in a spreadsheet that I included in the digital component of my capstone.",r.a.createElement("p",null),r.a.createElement("button",{className:"button"},r.a.createElement("a",{href:"https://airtable.com/shrgUn4Gw76RzAFDU",target:"_blank",className:"button--link"},"Browse Housing Databases"))),r.a.createElement("p",null,"For this project, I worked at a smaller scale and combined the TCIE data with the NYC Department of City Planning's ",r.a.createElement("a",{href:"https://www1.nyc.gov/site/planning/data-maps/open-data/dwn-pluto-mappluto.page",target:"_blank"},"Primary Land Use Tax Output")," (PLUTO) dataset. With the vast majority of the BBLs in the TCIE set included in the PLUTO list, I could add information on addresses, approximate neighborhoods, boroughs and ownership, as of 2021. Given that landlords who have amassed a considerable number of properties can tend toward speculative behavior, I proceeded with a bubble chart of landlords with at least 10 properties found in the original TCIE data. Of course, buildings have changed hands over the past nearly two decades but at least from this collection of more than 25,000 properties, the visualization, color-coded by the borough(s) in which the landlord's buildings are found, gives an idea of the comparatively larger portfolios even in this sample of properties out of the more than 850,000 in the PLUTO dataset. As above, this chart would also be meant for the eyes of someone looking for trends and individual areas and properties of interest, intended to give them an idea, not comprehensive insight, into ownership among the TCIE dataset. Though it is also visualizing aggregated data, in this case it can lead one in the direction of, say, specific landlords.")))}function m(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){fetch("https://gist.githubusercontent.com/cheje/2b36ef7c3d95611281873910f5536b08/raw/0d7dc284ae90f63a111616e2919d81a985a9e3bd/tcie-owners.json").then((function(e){return e.json()})).then((function(t){console.log(t);var a={Manhattan:"#3A0CA3",Bronx:"#7209B7",Brooklyn:"#F72585","Bronx, Manhattan":"#4361EE","Brooklyn, Manhattan, Queens":"#4CC9F0","Manhattan, Bronx, Brooklyn":"#4CC9F0",Queens:"#4CC9F0"},n=d.m(e.current).style("width",600).style("height",600),r=function(e){return d.i().size([600,600]).padding(3)(d.g({children:e}).sum((function(e){return e.buildings})))}(t),i=d.m(".tooltip"),o=n.selectAll().data(r.children).enter().append("g").attr("transform",(function(e){return"translate(".concat(e.x,", ").concat(e.y,")")})),s=o.append("circle").attr("r",(function(e){return e.r})).style("fill",(function(e){return a[e.data.boro_names]})).style("opacity","0.7").on("mouseover",(function(e,t){i.select("span").attr("class","tooltip-text").html('<span style="font-weight:bold; color:#FFC900;">'.concat(t.data.ownername,"</span> owns <span style='font-weight:bold; color:#FFC900;' }}>").concat(t.data.buildings,' properties</span> (in <span style="font-weight:bold; color:#FFC900;">').concat(t.data.boro_names,"</span>) found in the TCIE data.")),i.style("visibility","visible"),d.m(this).style("stroke","#fff")})).on("mousemove",(function(e){return i.style("top","".concat(e.pageY,"px")).style("left","".concat(e.pageX+10,"px"))})).on("mouseout",(function(){return d.m(this).style("stroke","none"),i.style("visibility","hidden")})),l=o.append("text").attr("dy",2).text((function(e){return e.data.ownername.substring(0,e.r/4)})).attr("class","text--bubbles");s.transition().ease(d.d).duration(1e3).attr("r",(function(e){return e.r})),l.style("opacity",(function(e){return e.data.buildings>=20?1:0}))}))}),[]),r.a.createElement("div",{style:{width:"70vw",margin:"0 auto"}},r.a.createElement("div",{className:"flex-container-bubble"},r.a.createElement("div",{className:"flex-child vis-caption"},r.a.createElement("div",{className:"chart--title"},"Who Owns the Most Buildings?"),r.a.createElement("br",null),"These landlords have amassed the highest number of properties found in the TCIE data. As indicated in ",r.a.createElement("span",{style:{color:"#3A0CA3",fontWeight:"bold"}},"purple"),", many of these portfolios are made up of buildings in ",r.a.createElement("span",{style:{color:"#3A0CA3",fontWeight:"bold"}},"Manhattan"),". Hover over a bubble to see details.",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"vis-caption-small"},"Data sources: TCIE, PLUTO")),r.a.createElement("div",{className:"flex-child"},r.a.createElement("svg",{ref:e,style:{display:"block",margin:"auto"}}),r.a.createElement("div",{className:"tooltip"},r.a.createElement("img",{alt:""}),r.a.createElement("div",null,r.a.createElement("a",null),r.a.createElement("span",null))))))}function f(){return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h5",{className:"subsubhead"},"Cap Rates, a Qualitative Indicator"),r.a.createElement("p",null,"For the Landlords Project, ",r.a.createElement("a",{href:"https://www.linkedin.com/in/kate-a-ham",target:"_blank"},"Kate Ham"),", housing justice advocate pursuing a UC Berkeley master of city planning degree, added a capitalization rate variable for the TCIE dataset. They noted that in a conversation with Jacob Udell of the ",r.a.createElement("a",{href:"https://unhp.org/",target:"_blank"},"University Neighborhood Housing Program"),", he said that the most accurate cap rates should be in the year a building was sold ",r.a.createElement("i",null,"when that year is within a year of the TCIE filing year"),", whether that be the year before, after or of the year of the filing. This generated cap rates for some 3,500 buildings. The lower the cap rate, namely at the 3.5 and below threshold, the greater the likelihood of speculative behavior. How a cap rate is derived, as noted below, implies that lower rates result from lower incomes (numerator) relative to the market value of a building."),r.a.createElement("p",null,"Cap rates can serve as a qualitiative variable in helping to suspect potentially distressed housing, which refers to cases where the owner cannot keep up with mortgage payments putting the property on the brink of foreclosure. The NYC Department of Housing Preservation and Development analyzes cap rates when populating its ",r.a.createElement("a",{href:"https://data.cityofnewyork.us/Housing-Development/Speculation-Watch-List/adax-9mit",target:"_blank"},"Speculation Watch List"),", of mostly rent-regulated multiple dweeling units. HPD compares a property's cap rate, which it ",r.a.createElement("a",{href:"https://www1.nyc.gov/site/hpd/about/speculation-watch-list.page",target:"_blank"},"describes"),' as the building\'s "net operating income divided by its sales price" to the median cap rate of similar properties purchased in the same borough. Those with cap rates below the median value of the borough make the list. In their "',r.a.createElement("a",{href:"https://www1.nyc.gov/assets/hpd/downloads/pdfs/services//speculation-watch-list-adopted-rules.pdf",target:"_blank"},"Statement of Basis and Purpose"),'" for the speculation watch list, HPD states: ',r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("blockquote",null,r.a.createElement("i",null,'"Such below average Capitalization Rates suggest purchase prices exceeding the value of these properties, which is based upon their net operating income. When a purchaser is willing to pay more than the property value, it indicates a greater potential for tenant harassment so that the purchaser can recoup its inflated purchase price through forcing tenants out in order to escalate rents."'))),r.a.createElement("p",null,"In its explanation on the cap rate, the ",r.a.createElement("a",{href:"https://homevestorsfranchise.com/blog/northeast/2021/04/understanding-cap-rates-in-nyc-the-basics-you-need-to-know/",target:"_blank"},"HomeVestors Franchise"),' notes that the net operating cost in the equation is that of "after expenses"; this NOI is divided by the "current market value" and not what the landlord had paid for the building as "any renovations or improvements you do will affect the market value and, subsequently, the cap rate."'),r.a.createElement("p",null,"With this understanding of how expenses factor into determining cap rates, we can use the two variables to transition from visualizations of aggregated data to those of actual data points and start digging through potential buildings of interest.")))}var g=a(29),b=a.n(g);function y(){var e=Object(n.useRef)();return d.h("https://gist.githubusercontent.com/cheje/19f1b2cd100181c85f5c59f5e9d7be9f/raw/64d74131a9bef399456fd212e167826b96cc1acd/nyc-boroughs.geojson").then((function(t){console.log(t[1]);var a=d.m(e.current).attr("width",800).attr("height",750),n=d.e().fitSize([800,750],t);a.append("g").selectAll("path").data(t.features).enter().append("path").attr("fill","#d0d9cd").attr("d",d.f().projection(n)).style("stroke","rgba(255,255,255,0.5)"),a.append("text").attr("x","50%").attr("y","85%").html("Data sources: NYC Planning (<a href='https://www1.nyc.gov/site/planning/data-maps/open-data/census-download-metadata.page' target='_blank'>NTAs GeoJSON</a>), TCIE, PLUTO").attr("class","vis-caption-small"),d.h("https://gist.githubusercontent.com/cheje/fb731829fb4fe824f32f675c9fca880f/raw/0125a55d280661b27ac2686d90e3bc42a27c438c/tcie-points.geojson").then((function(e){var t=a.selectAll().data(e.features).enter().append("circle").attr("cx",(function(e){return n(e.geometry.coordinates)[0]})).attr("cy",(function(e){return n(e.geometry.coordinates)[1]}));function r(){t.transition().duration(1e3).attr("r",(function(e){return+e.properties.cr_pct<=3.5&&null!==+e.properties.cr_pct?2:1})).style("stroke",(function(e){return+e.properties.cr_pct<=3.5&&null!==e.properties.cr_pct?"#FFEB4D":"rgba(140, 104, 135, 0.5)"})).style("fill",(function(e){return+e.properties.cr_pct<=3.5&&null!==e.properties.cr_pct?"#FFEB4D":"rgba(140, 104, 135, 0)"}))}var i=[function(){t.attr("r","1").style("fill","rgba(115, 85, 111, 0)").style("stroke","#8C6887")},function(){t.transition().duration(1e3).style("stroke",(function(e){return+e.properties.exp_pct<=35&&null!==e.properties.exp_pct?"rgba(242, 89, 82, 1)":"rgba(140, 104, 135, 0.5)"})).style("fill",(function(e){return+e.properties.exp_pct<=35&&null!==e.properties.exp_pct?"rgba(242, 89, 82, 0)":"rgba(140, 104, 135, 0)"}))},r,r,r];d.n(".step");b()().setup({step:".step"}).onStepEnter((function(e){i[e.index](),d.m(e.element).style("opacity",1)})).onStepExit((function(e){}))}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("svg",{id:"chart",ref:e}),r.a.createElement("div",{class:"steps"},r.a.createElement("div",{class:"step"},"When plotting the 25,000 TCIE buildings found in the PLUTO set, a general shape of the five boroughs emerges. While the stacked bar chart showed raw TCIE filing counts of those buildings by year and borough, this map reveals where they are approximately located within the boroughs \u2013\xa0while driving home the dominance of properties located in Manhattan. But how might we navigate through these tens of thousands of points?"),r.a.createElement("div",{class:"step"},"Here, properties with a history of a landlord spending under 35 percent of their total real estate income on operating expenses are marked in red. For these 12,700+ buildings, in some year between 2004 and 2019, according to TCIE filings, the landlord spent just above a third of their income on expenses. While this would be explained by a multitude of factors, one of them could be that the landlord is deferring maintenance as a tactic to push out tenants, especially in gentrifying neighborhoods (Hornbach et al. 10). This is one of numerous ways to narrow down a bit to buildings of interest."),r.a.createElement("div",{class:"step"},"Cap rates of 3.5 or lower (including negative cap rates, which would involve a negative net operating income, for example in cases where operating costs exceed income) provide another way to filter out some of the data points as seen in the less visible but still apparent spots of yellow.")))}var w=a(68),v=a.n(w),E=a(69),k=a.n(E);function x(){return r.a.createElement("section",null,r.a.createElement("div",{style:{paddingBottom:"50px"}},r.a.createElement("p",null,"Continuing with the use of expenses and cap rates, of a certain threshold, as an approach to filtering through the data, we can isolate those points on a map and find characteristics of those individual buildings through a table and chart. Explore them in the dashboards linked below. Thousands of points still remain but in this case, you can zoom in to specific regions and see not just buildings with potential risk of speculation, but also regions where clusters exist. In those cases, large-scale development projects might be on the horizon."),r.a.createElement("p",{className:"highlight-box"},'The CREATE Initiative, a project that studies envrionment and equity, released its "',r.a.createElement("a",{href:"https://create.umn.edu/toolkit/",target:"_blank"},"Sharing in the Benefits of a Greening City"),'" toolkit, in which the researchers cover key housing concepts such as real estate speculation. It notes that such activity occurs "where significant changes in value are anticipated" such as large-scale investments in green infrastructure development (Klein et al. 20). Investors might go after properties in or around those areas years before project completion and in the process, displacing long-time residents, increasing rent and property values; and "in doing so, speculative practices restrict who is able to access and enjoy the fruits of these investments."')),r.a.createElement("div",{className:"flex-container-shiny"},r.a.createElement("div",{className:"flex-child"},r.a.createElement("ul",null,r.a.createElement("li",null,"Map and table of properties that at some point between 2004-2019 had expenses as 35% or lower of their income"),r.a.createElement("li",null,"Chart and table of expense history for all properties in the TCIE-PLUTO dataset"))),r.a.createElement("div",{className:"flex-child"},r.a.createElement("a",{href:"https://jenche.shinyapps.io/lpexp/",target:"_blank"},r.a.createElement("img",{width:"400px",alt:"Screenshot of expenses dashboard",src:v.a,style:{boxShadow:"1px 2px 5px rgba(0, 0, 0, 0.1)"}})),r.a.createElement("button",{className:"button"},r.a.createElement("a",{href:"https://jenche.shinyapps.io/lpexp/",target:"_blank",className:"button--link"},"EXPENSES")))),r.a.createElement("br",null),r.a.createElement("div",{className:"flex-container-shiny"},r.a.createElement("div",{className:"flex-child"},r.a.createElement("ul",null,r.a.createElement("li",null,"Map of properties that at some point between 2004-2019 had a cap rate of under 3.5"),r.a.createElement("li",null,"Table of same data includes all years where a property had a cap rate under 3.5"))),r.a.createElement("div",{className:"flex-child"},r.a.createElement("a",{href:"https://jenche.shinyapps.io/lpcr/",target:"_blank"},r.a.createElement("img",{width:"400px",src:k.a,alt:"Screenshot of cap rates dashboard",style:{boxShadow:"1px 2px 5px rgba(0, 0, 0, 0.1)"}})),r.a.createElement("button",{className:"button"},r.a.createElement("a",{href:"https://jenche.shinyapps.io/lpcr/",target:"_blank",className:"button--link"},"CAP RATES")))),r.a.createElement("div",{style:{padding:"50px 0 35px 0"}},r.a.createElement("p",null,"The visualizations above have been presented as a sort of behind-the-scenes means of finding buildings where real estate speculation, and forms of profit over tenants, might be occurring. Using variables such as expense, cap rate history and geographic location can help narrow down the original data into points that might guide journalists, advocates, researchers or residents in potentially helpful directions for further investigation."),r.a.createElement("p",null,"In the final visualization for my project, rather than pinpointing buildings or areas of possible interest based on the visuals so far, I looked for some residential buildings covered in 2021 in local NYC media outlets in the context of rezoning, complaints, gentrification and maintenance, and other possibilities of distress. I then worked backwards to see whether they were part of the TCIE-PLUTO dataset, and if so, what kind of expense history they had. This part is not meant to imply correlation or any direct influence between expenses and the speculative status of a building but rather to show how the expense history might help to look into property histories."),r.a.createElement("p",{style:{textAlign:"center",fontFamily:"Roboto Condensed",textTransform:"uppercase",fontWeight:"bold",fontSize:"0.9em"}},"Scroll down \xa0\xa0",r.a.createElement("i",{class:"arrow arrow-down"}))))}var C=a(7),T=a(8),A=a(15),I=a(16),N=(a(162),a(30)),j=a.n(N),B={fill:["fill-opacity"],line:["line-opacity"],circle:["circle-opacity","circle-stroke-opacity"],symbol:["icon-opacity","text-opacity"],raster:["raster-opacity"],"fill-extrusion":["fill-extrusion-opacity"]},D={left:"lefty",center:"centered",right:"righty"},S=function(e){var t=-1!==e.indexOf("?");return{url:e+(t?"&pluginName=journalismScrollytelling":"?pluginName=journalismScrollytelling")}};function M(e){var t=e.id,a=e.theme,n=e.title,i=e.image,o=e.description,s=e.link,l=e.headline,c=t===e.currentChapterID?"step active":"step";return r.a.createElement("div",{id:t,className:c},r.a.createElement("div",{className:a},n&&r.a.createElement("h3",{className:"title"},n),i&&r.a.createElement("img",{src:i,alt:n}),o&&r.a.createElement("p",null,o),s&&r.a.createElement("p",null,"Source: ",r.a.createElement("a",{href:s,target:"_blank"},l))))}var F=function(e){Object(A.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(C.a)(this,a),(n=t.call(this,e)).state={currentChapter:e.chapters[0]},n}return Object(T.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chapters[0].location;j.a.accessToken=e.accessToken;var a=new j.a.Map({container:this.mapContainer,style:e.style,center:t.center,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,transformRequest:S}),n=new j.a.Marker;function r(e){(function(e){var t=a.getLayer(e).type;return B[t]})(e.layer).forEach((function(t){a.setPaintProperty(e.layer,t,e.opacity)}))}e.showMarkers&&n.setLngLat(t.center).addTo(a);var i=this.setState.bind(this),o=b()();a.on("load",(function(){o.setup({step:".step",offset:.5,progress:!0}).onStepEnter((function(t){var o=e.chapters.find((function(e){return e.id===t.element.id}));i({currentChapter:o}),a.flyTo(o.location),e.showMarkers&&n.setLngLat(o.location.center),o.onChapterEnter.length>0&&o.onChapterEnter.forEach(r)})).onStepExit((function(t){var a=e.chapters.find((function(e){return e.id===t.element.id}));a.onChapterExit.length>0&&a.onChapterExit.forEach(r)}))})),window.addEventListener("resize",o.resize)}},{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=this.state.currentChapter.id;return r.a.createElement("div",{style:{position:"relative"}}," ",r.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"absolute top right left bottom"}),r.a.createElement("div",{id:"story"},t.title&&r.a.createElement("div",{id:"header",className:a},r.a.createElement("h1",null,t.title),t.subtitle&&r.a.createElement("h2",null,t.subtitle),t.byline&&r.a.createElement("p",null,t.byline)),r.a.createElement("div",{id:"features",className:D[t.alignment]},t.chapters.map((function(e){return r.a.createElement(M,Object.assign({key:e.id,theme:a},e,{currentChapterID:n}))}))),t.footer&&r.a.createElement("div",{id:"footer",className:a},r.a.createElement("p",null,t.footer))))}}]),a}(n.Component),z={style:"mapbox://styles/jenche/ckxy9mihs40ew14phbjizimgm",accessToken:"".concat("pk.eyJ1IjoiamVuY2hlIiwiYSI6ImNrd29ramoxMjAxangycW8wbHliN3hnd3QifQ.mcn135nyO1w2TB-5DCrtyA"),showMarkers:!1,alignment:"right",theme:"light",chapters:[{id:"",description:"Scroll through to see residential buildings that have been covered by local news outlets for reasons that might suggest speculation on the part of the owner.",location:{center:[-74.006,40.7128],zoom:10,pitch:0,bearing:0},onChapterEnter:[],onChapterExit:[]},{id:"1002470001",title:"247 Cherry Street, 275 South Street (Manhattan)",description:"Two Bridges highrises planned for the Lower East Side waterfront",link:"https://boweryboogie.com/2021/11/chetrit-buys-into-two-bridges-waterfront-while-starrett-lists-for-100m/",headline:"Chetrit Buys into Two Bridges Waterfront While Starrett Lists for $100M",location:{center:[-73.98904,40.71183],zoom:16.5,pitch:75,bearing:-20}},{id:"1004090043",title:"101 Delancey Street, 130 Orchard Street (Manhattan)",description:"",link:"https://boweryboogie.com/2021/06/landlord-michael-shah-nabs-sago-hotel-on-orchard-street-for-8-5m/",headline:"Landlord Michael Shah Nabs Sago Hotel on Orchard Street for $8.5M",location:{center:[-73.98891,40.71849],zoom:18,pitch:75,bearing:25}},{id:"3023770002",title:"252 Kent Avenue (Brooklyn)",description:"",link:"https://www.brooklynpaper.com/city-council-votes-to-approve-river-ring-clearing-the-way-for-massive-waterfront-williamsburg-development/",headline:"City Council votes to approve River Ring, clearing the way for massive waterfront Williamsburg development",location:{center:[-73.96614,40.71654],zoom:18,pitch:75,bearing:25}},{id:"3011920085",title:"1035 Washington Avenue (Brooklyn)",description:"",link:"https://www.brooklynpaper.com/locals-blast-proposed-crown-heights-development-at-city/",headline:"Locals blast proposed Crown Heights development at City Planning Hearing",location:{center:[-73.96066,40.66445],zoom:18,pitch:75,bearing:25}},{id:"4000460050",title:"47-07 Vernon Boulevard, 10-12 47 Avenue (Queens)",description:"",link:"https://qns.com/2021/12/new-survey-shows-hunters-point-is-third-most-apartment-crazed-neighborhood-in-u-s/",headline:"Hunters Point New survey shows Hunters Point is third most apartment-crazed neighborhood in U.S.",location:{center:[-73.95296,40.74519],zoom:18,pitch:75,bearing:25}},{id:"4017210008",title:"106-18 Northern Boulevard (Queens)",description:"",link:"https://qns.com/2021/05/planned-25-story-luxury-development-in-corona-slated-for-completion-in-2024/",headline:"Corona Planned 25-story luxury development in Corona slated for completion in 2024",location:{center:[-73.86213,40.75752],zoom:18,pitch:75,bearing:25}}]};function O(){return r.a.createElement("div",{style:{paddingBottom:"45px"}},"  ",r.a.createElement("section",{className:"vis-caption"},"Code source: Mapbox's ",r.a.createElement("a",{href:"https://blog.mapbox.com/how-to-build-a-scrollytelling-map-ead6baf2cd1b",target:"_blank"},"Interactive Storytelling template"),r.a.createElement("p",{style:{paddingTop:"1em"}},r.a.createElement("span",{style:{textTransform:"uppercase",fontWeight:"bold",fontFamily:"Roboto Condensed"}},"Thank you")," [names]")))}var L=a(70),W=a.n(L);function G(){return r.a.createElement("div",{style:{justifyContent:"flex-end"},className:"footer--links"},r.a.createElement("section",{style:{color:"#ffffff"}},r.a.createElement("a",{href:"https://github.com/cheje/csgc",target:"_blank"},r.a.createElement("img",{width:"15px",alt:"GitHub logo",src:W.a})),"\xa0\xa0",r.a.createElement("a",{href:"https://natural-twill-b5c.notion.site/Resources-9110b585bb174d8cb6d217474b3f891d",target:"_blank"},"Resources"),"\xa0|\xa0",r.a.createElement("a",{href:"mailto:jcheng1@gradcenter.cuny.edu",target:"_blank"},"Email"),"\xa0\xa0"))}function P(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(l,null),r.a.createElement(c,null),r.a.createElement(p,null),r.a.createElement(u,null),r.a.createElement(m,null),r.a.createElement(f,null),r.a.createElement(y,null),r.a.createElement(x,null),r.a.createElement(F,z),r.a.createElement(O,null),r.a.createElement(G,null))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root"))},3:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/shiny-expenses.0d6212f1.png"},69:function(e,t,a){e.exports=a.p+"static/media/shiny-cr.d8f40791.png"},70:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="}},[[156,1,2]]]);
//# sourceMappingURL=main.cc562ef7.chunk.js.map