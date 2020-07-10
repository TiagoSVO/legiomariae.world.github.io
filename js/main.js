$(document).ready(function (){
    const hashSitesByCountry = [
        {code: 'IE', country: 'Ireland', links: [
            {label: 'Concilium Legionis Website (The International Headquarters of the Legion of Mary)', url: 'http://www.legionofmary.ie/'},
            {label: 'Deus et Patria Ireland', url: 'http://www.legionofmary-deusetpatria.com/'}
        ]},
        {code: 'US', country: 'United States of America', links: [
            {label: 'Arlington Regia Website', url: 'http://www.arlingtonregia.com/'},
            {label: 'Boston Senatus', url: 'https://www.newenglandlegionofmary.org/'},
            {label: 'Chicago Senatus', url: 'https://legionofmarychicago.org/'},
            {label: 'Cincinnati Senatus', url: 'https://legionofmarycincinnatisenatus.org/'},
            {label: 'Detroit Regia', url: 'http://www.legionofmarymichigan.org/'},
            {label: 'Father Fran Peffley’s Unofficial Legion Website', url: 'http://www.legionofmary.org'},
            {label: 'Legion of Mary - Tidewater, VA USA', url: 'http://www.legionofmarytidewater.com/index.htm'},
            {label: 'Legion of Mary, Senatus of Philadelphia', url: 'http://philadelphiasenatus.org/'},
            {label: 'Miami Regia', url: 'http://www.legionofmarymiamiregia.com/'},
            {label: 'New York Senatus', url: 'https://www.legion-of-mary-ny.org/'},
            {label: 'San Francisco Senatus', url: 'http://www.sfsenatus.com/'},
            {label: 'St. Louis Senatus', url: 'http://legionofmarystlsenatus.org'},
            
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
            {label: 'Belo Horizonte\'s Senatus - Minas Gerais', url: 'https://www.legiaodemariabh.org.br/'},
            {label: 'Brasília\'s Regia - Federal District', url: 'https://legiomariae.com.br/'},
            {label: 'Rio de Janeiro\'s Senatus - Rio de Janeiro', url: 'https://www.legiaodemaria.org.br/'},
            {label: 'São Paulo\'s Senatus - São Paulo', url: 'https://www.senatus.org.br/'}
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
                $trTag.append($tdTag.clone(1).append($aTag.text('Go to site')))
                $tagList.append($trTag)
            });

            return true
        }

        return false

    }

    function selectCountry(mapy, e, code) {
        let $tagListWrapper = $('#list-sites-wrapper')
        let $tagList = $tagListWrapper.find('#list-sites')
        let $tagCountrySelected = $tagListWrapper.find('#country-selected')
        let $tagNoCountrySelected = $tagListWrapper.find('#no-country-selected')
        let $tagSpanCountryWithoutSite = $('#name-country-without-website')

        $tagList.children().remove()
        
        if (createSiteListTags(code, $tagList)) {
            $tagCountrySelected.css('display', 'block')
            $tagNoCountrySelected.css('display', 'none')
        } else {
            $tagCountrySelected.css('display', 'none')
            $tagNoCountrySelected.css('display', 'block')
            $tagSpanCountryWithoutSite.text(mapy.getRegionName(code))
        }

        if (e) scrollTo('#list-sites-wrapper') 

    }
    
    // Render the map
    var mymap = new jvm.Map({
        container: $('#map'),
        map: 'world_mill',
        onRegionClick: function (e, code) {selectCountry(mymap, e, code)},
        backgroundColor: 'rgba(255, 0, 0, 0)'
    });

    function iniCountry() {
        let $tagFooterYear = $("#footer-year")
        let dt = new Date
        selectCountry(mymap, null, 'IE')
        $tagFooterYear.text(dt.getFullYear())
    }

    iniCountry()

});
