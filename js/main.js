$(document).ready(function (){
    const hashSitesByCountry = [
        {code: 'IE', country: 'Ireland', links: [
            {label: 'Concilium Legionis Website (The International Headquarters of the Legion of Mary)', url: 'http://www.legionofmary.ie/'},
            {label: 'Deus et Patria Ireland', url: 'http://www.legionofmary-deusetpatria.com/'}
        ]},
        {code: 'US', country: 'United States of America', links: [
            {label: 'San Francisco Senatus', url: 'http://www.sfsenatus.com/'},
            {label: 'Cincinnati Senatus', url: 'http://www.sfsenatus.com/'},
            {label: 'St. Louis Senatus', url: 'http://legionofmarystlsenatus.org'},
            {label: 'San Francisco Senatus', url: 'http://www.sfsenatus.com/'},
            {label: 'New York Senatus', url: 'https://www.legion-of-mary-ny.org/'},
            {label: 'Chicago Senatus', url: 'https://legionofmarychicago.org/'},
            {label: 'Houston Senatus', url: 'http://www.legion-of-mary-houston.com/'},
            {label: 'Cincinnati Senatus', url: 'http://legionofmarycincinnatisenatus.org/'},
            {label: 'Boston Senatus', url: 'https://www.newenglandlegionofmary.org/'},
            {label: 'Arlington Regia Website', url: 'http://www.arlingtonregia.com/'},
            {label: 'Detroit Regia', url: 'http://www.legionofmarymichigan.org/'},
            {label: 'Miami Regia', url: 'http://www.legionofmarymiamiregia.com/'},
            {label: 'Legion of Mary - Tidewater, VA USA', url: 'http://www.legionofmarytidewater.com/index.htm'},
            {label: 'Father Fran Peffley’s Unofficial Legion Website', url: 'http://www.legionofmary.org'},
            {label: 'Legion of Mary, Senatus of Philadelphia', url: 'http://philadelphiasenatus.org/'},
            
        ]},
        {code: 'AT', country: 'Austria', links: [
            {label: 'Legion of Mary, Senatus of Austria', url: 'http://www.legion-mariens.at/'}
        ]},
        {code: 'AU', country: 'Australia', links: [
            {label: 'Legion of Mary, Senatus of Melbourne', url: 'https://www.legionofmary.net.au/'},
            {label: 'Legion of Mary, Senatus of Sydney', url: 'https://legionofmary.org.au/'}
        ]},
        {code: 'BE', country: 'Belgium', links: [
            {label: 'Legion of Mary website for the Netherlands and Belgium', url: 'http://www.legioenvanmaria.nl/'}
        ]},
        {code: 'BR', country: 'Brazil', links: [
            {label: 'Brasília\'s Regia - Federal District', url: 'https://legiomariae.com/'}
        ]},
        {code: 'CO', country: 'Colombia', links: [
            {label: 'Legion of Mary, Senatus of Bogotá', url: 'http://legiondemariabogota.org.co/'},
            {label: 'Legion of Mary, Senatus of Medellin', url: 'http://legiondemariamed.blogspot.com/'}
        ]},
        {code: 'DE', country: 'Germany', links: [
            {label: 'Legion of Mary, Frankfurt Senatus', url: 'https://www.legion-mariens.de/'}
        ]},
        {code: 'ES', country: 'Spain', links: [
            {label: 'Legion of Mary, Madrid Senatus', url: 'http://www.legiondemaria.es/'}
        ]},
        {code: 'FR', country: 'France', links: [
            {label: 'Legion of Mary, Montreal Senatus', url: 'https://www.smlm.org/bienvenue'}
        ]},
        {code: 'GB', country: 'United Kingdom', links: [
            {label: 'Legion of Mary website for England and Wales', url: 'http://legionofmary.org.uk/'}
        ]},
        {code: 'IT', country: 'Italy', links: [
            {label: 'Legion of Mary website for Malta', url: 'https://claimser.wixsite.com/legjun-ta-marija'}
        ]},
        {code: 'MY', country: 'Malaysia', links: [
            {label: 'Legion of Mary, Senatus of Singapore', url: 'http://legiomariae.net/'}
        ]},
        {code: 'NL', country: 'Netherlands', links: [
            {label: 'Legion of Mary website for the Netherlands and Belgium', url: 'http://www.legioenvanmaria.nl/'}
        ]}, 
    ]

    function scrollTo(href) {
        $('html, body')
        .animate({ 
            scrollTop: $(href).offset().top
        }, 500, 'linear');
    }

    function createSiteListTags(code, tagList) {
        let itemCountry = hashSitesByCountry.find( item =>  item.code === code )
        let $tagList = $(tagList)

        if (itemCountry) {
            itemCountry.links.forEach(function (item, index) {
                let $trTag = $('<tr class="row-data-site">')
                let $tdTag = $('<td>')
                let $aTag = $('<a class="btn btn-danger" href="' + item.url + ' " target="_blank">')
                
                $trTag.append($tdTag.clone(1).text(index + 1))
                $trTag.append($tdTag.clone(1).text(item.label))
                // $trTag.append($tdTag.clone(1).append($aTag.text(item.url)))
                $trTag.append($tdTag.clone(1).append($aTag.text('Go to site')))
                $tagList.append($trTag)
            });

            return true
        }

        return false

    }

    function selectCountry(e, code) {
        let $tagListWrapper = $('#list-sites-wrapper')
        let $tagList = $tagListWrapper.find('#list-sites')
        let $tagCountrySelected = $tagListWrapper.find('#country-selected')
        let $tagNoCountrySelected = $tagListWrapper.find('#no-country-selected') 

        $tagList.children().remove()
        
        if (createSiteListTags(code, $tagList)) {
            $tagCountrySelected.css('display', 'block')
            $tagNoCountrySelected.css('display', 'none')
            scrollTo('#list-sites-wrapper')
        } else {
            $tagCountrySelected.css('display', 'none')
            $tagNoCountrySelected.css('display', 'block')
            scrollTo('#list-sites-wrapper')
        }

    }
    
    // Render the map
    $('#map').vectorMap({
        map: 'world_mill',
        onRegionClick: selectCountry,
        backgroundColor: 'rgba(255, 0, 0, 0)'
    });

});
