var Grid = ( function() {
    var defaults = { count: 3, value: null };


    /**
     * `Grid` constructor function.
     */
    function Grid( options ) {
        var settings = Object.assign( {}, defaults, options );

        this.grid = _buildGrid( settings.count, settings.value );

        return this;
    }

    /**
     * Given a `User` instance and an array of coordinates, function updates the grid.
     *
     * @param {Object} `user`
     * @param {Array} `coords`
     * @return {true|null}
     */
    Grid.prototype.update = function( user, coords ) {
        user = user || null;
        coords = coords || null;

        // Ensure that rcvd. args. are of the correct type.
        if ( ( !user || typeof user !== 'object' ) || ( !coords || !Array.isArray( coords ) ) ) {
            console.error( '`update()` method called with missing or invalid arguments.' );

            return null;
        }

        /// TODO[@jrmykolyn] - Ensure that vars. below store integer values.
        var rowPos = coords[ 0 ];
        var colPos = coords[ 1 ];

        // Update target grid space if unoccupied, log error msg. and return `null` otherwise.
        if ( !this.grid[ rowPos ][ colPos ] ) {
            this.grid[ rowPos ][ colPos ] = user.symbol;

            return true;
        } else {
            console.error( `Space at position [${rowPos}, ${colPos}] is already occupied.` );

            return null;
        }
    } // /update();


    /**
     * ...
     */
    Grid.prototype.checkWin = function() {
        /// TODO[@jrmykolyn] - Review 'win conditions' below, convert to control structure.

        // IF `this.grid[ 0 ]` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid[ 1 ]` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid[ 2 ]` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid[ 0 || 1 || 2 ][ 0 ]` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid[ 0 || 1 || 2 ][ 1 ]` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid[ 0 || 1 || 2 ][ 2 ]` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid([ 0 ][ 0 ], [ 1 ][ 1 ], [ 2 ][ 2 ] )` CONTAINS ALL 'x' || 'o' SYMBOLS.
        // IF `this.grid([ 0 ][ 2 ], [ 1 ][ 1 ], [ 2 ][ 0 ] )` CONTAINS ALL 'x' || 'o' SYMBOLS.

        return null; /// TEMP
    } // /checkWin()


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