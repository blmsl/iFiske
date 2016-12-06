angular.module('ifiske.models')
.provider('MapData', function MapDataProvider() {
    var tables = {
        poi: {
            name:    'Poi',
            primary: 'ID',
            members: {
                ID:    'int',
                orgid: 'int',
                type:  'int',
                price: 'int',
                t:     'text',
                d:     'text',
                la:    'real',
                lo:    'real',

            },
        },
        poiType: {
            name:    'Poi_Type',
            primary: 'ID',
            members: {
                ID:   'int',
                t:    'text',
                icon: 'text',
            },
        },
        polygon: {
            name:    'Polygon',
            primary: 'ID',
            members: {
                ID:    'int',
                orgid: 'int',
                t:     'text',
                c:     'text',
                ver:   'int',
                mod:   'int',
                poly:  'text',
            },
        },
    };

    this.$get = function(DB, API, $q, localStorage) {
        var wait = $q.all([
            DB.initializeTable(tables.poi),
            DB.initializeTable(tables.poiType),
            DB.initializeTable(tables.polygon),
        ]).then(function(results) {
            for (var i = 0; i < results.length; ++i) {
                if (results[i])
                    return update('skipWait');
            }
        });
        function update(shouldUpdate) {
            var innerWait = wait;
            if (shouldUpdate) {
                if (shouldUpdate === 'skipWait')
                    innerWait = $q.resolve();

                return innerWait.then(function() {
                    return $q.all([
                        API.get_mapbox_api().then(function(data) {
                            return localStorage.set('mapbox_api', data);
                        }),
                        API.get_map_pois().then(DB.insertHelper(tables.poi)),
                        API.get_map_poi_types().then(DB.insertHelper(tables.poiType)),
                        API.get_map_polygons().then(DB.insertHelper(tables.polygon)),
                    ]);
                });
            }
        }

        return {
            update:  update,
            getPois: function(id) {
                return wait.then(function() {
                    return DB.getMultiple([
                        'SELECT *',
                        'FROM Poi',
                        'WHERE orgid = ?',
                    ].join(' '), [id]);
                });
            },

            getPoiTypes: function() {
                return wait.then(function() {
                    return DB.getMultiple([
                        'SELECT *',
                        'FROM Poi_Type',
                    ].join(' '));
                });
            },

            getPolygons: function(id) {
                return wait.then(function() {
                    return DB.getMultiple([
                        'SELECT *',
                        'FROM Polygon',
                        'WHERE orgid = ?',
                    ].join(' '), [id]);
                });
            },

        };
    };
});