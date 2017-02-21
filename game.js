var Game = (function() {
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
        if ( !gameData.players || !Array.isArray( gameData.players() ) ) {
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

        // Return instance.
        return this;
    } // /Game()


    /**
     * ...
     */
    Game.prototype.play = function( turns ) {
        if ( !turns || !Array.isArray( turns ) || !turns.length ) {
            console.error( '`play()` method called with missing or invalid `turns` data.' );
            return null;
        }
    } // /play()


    // PUBLIC API
    return Game;
} )();