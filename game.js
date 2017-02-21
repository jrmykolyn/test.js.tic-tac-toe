var Game = (function() {
    var currentPlayerIndex = null;
    var winningPlayer = null;


    /**
     * ...
     */
    function Game( gameData ) {
        // Validate presence/type of  `gameData`.
        if ( !gameData || typeof gameData !== 'object' ) {
            console.error( 'new `Game` instantiated with missing or invalid `gameData`;' );

            return null;
        }

        // Validate presence of `players` key.
        if ( !gameData.players || !Array.isArray( gameData.players ) ) {
            console.error( '`gameData` must include `players:Array<User>` key.');

            return null;
        }

        // Validate presence of `grid` key.
        if ( !gameData.grid || typeof gameData.grid !== 'object' ) {
            console.error( '`gameData` must include `grid:Object<Grid>` key.');

            return null;
        }

        // Construct `Game` instance.
        this.players = gameData.players;
        this.grid = gameData.grid;

        // Set/update local vars.
        currentPlayerIndex = 0;

        // Return instance.
        return this;
    } // /Game()


    /**
     * ...
     */
    Game.prototype.play = function( turns ) {
        // ...
        var _this = this;

        // Validate presence/type of `turns`.
        if ( !turns || !Array.isArray( turns ) || !turns.length ) {
            console.error( '`play()` method called with missing or invalid `turns` data.' );

            return null;
        }

        // Loop over `turns`.
        turns.forEach( function( turn ) {
            if ( !winningPlayer ) {

                _this.grid.update( _this.players[ currentPlayerIndex ], turn );

                /// TODO[@jrmykolyn] - Consider moving `checkWin()` method to `Game` prototype.
                winningPlayer = _this.grid.checkWin(); /// TEMP - Function currently returns `null` in all cases.

                // Update `currentPlayerIndex`.
                currentPlayerIndex = ( currentPlayerIndex === 1 ) ? 0 : 1;
            }
        } );

        /// TODO[@jrmykolyn] - Consider returning winning `User` or ID.
        return null; /// TEMP
    } // /play()


    // PUBLIC API
    return Game;
} )();