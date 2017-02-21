var User = ( function() {
    var users = [];
    var symbols = [ 'o', 'x' ];
    var availableSymbols = symbols.slice( 0 );

    function User( userData ) {
        userData = userData || {};

        // Validate presence of `name`.
        if ( !userData.name ) {
            console.error( 'Options object passed to `User` constructor must have a `name` key.' );
            return this;
        }

        // Ensure that num. `User` instances does not exceed num. of available 'symbols' (eg. 'x'/'o').
        if ( !availableSymbols.length ) {
            console.error( 'Only ' + symbols.length + 'x `User` instances may be created.' );
            return this;
        }

        // Construct `User` instance.
        this.id = ( users.length + 1 );
        this.name = userData.name || 'John Doe';
        this.symbol = availableSymbols.shift();

        // Add instance to `user` 'class variable'.
        users.push( this );

        // Return instance.
        return this;
    }

     return User;
} )();