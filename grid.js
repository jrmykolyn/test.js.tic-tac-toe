var Grid = ( function() {
    
    /**
     * `Grid` constructor function.
     */
    function Grid( gridData ) {
        if ( !gridData ) {
            console.error( '`Grid()` invocation missing argument: `gridData`.' );
        }

        this.grid = _buildGrid( 3, false );

        return this;
    }


    /**
     * Private function, used to create the two-dimensional array which represents the game grid.
     */
    function _buildGrid( count, val ) {
        count = count || 3;
        val = val || null;

        var grid = [];

        for ( var i = 0, x = count; i < x; i++ ) {
            var row = [];

            for ( var j = 0, y = count; j < y; j++ ) {
                row.push( val );
            }

            grid.push( row );
        }

        return grid;
    }


    // PUBLIC API
    return Grid;
} )();