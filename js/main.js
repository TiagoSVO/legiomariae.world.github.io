$(document).ready(function (){
    const hashSitesByCountry = [
        {code: 'AR', country: 'Brazil', links: [{label: 'Regia de Argentina - Distrito Federal', url: 'https://legiomariae.com/'}]},
        {code: 'BR', country: 'Brazil', links: [{label: 'Regia de Brasília - Distrito Federal', url: 'https://legiomariae.com/'}]}
    ]

    function selectCountry(e, code) {
        let $tagListWrapper = $('#list-sites-wrapper')
        let $tagList = $tagListWrapper.find('#list-sites')
        let $tagCountrySelected = $tagListWrapper.find('#country-selected')
        let $tagNoCountrySelected = $tagListWrapper.find('#no-country-selected') 

        $tagList.children().remove()

        
        
        let itemCountry = hashSitesByCountry.find( item =>  item.code === code )
        itemCountry.links.forEach(function (item, index) {
            let $trTag = $('<tr class="row-data-site">')
            let $tdTag = $('<td>')
            let $aTag = $('<a href="' + item.url + ' " target="_blank">')
            
            $trTag.append($tdTag.clone(1).text(index + 1))
            $trTag.append($tdTag.clone(1).text(item.label))
            $trTag.append($tdTag.clone(1).append($aTag.text(item.url)))
            $tagList.append($trTag)
        });

        $tagCountrySelected.css('display', 'block')
        $tagNoCountrySelected.css('display', 'none')
    }
    
    // Render the map
    $('#map').vectorMap({
        map: 'world_mill',
        onRegionClick: selectCountry,
        backgroundColor: '#ff0000'
    });

});
