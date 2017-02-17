var User = ( function() {
    var users = [];
    var symbols = [ 'o', 'x' ];

    function User( userData ) {
        userData = userData || {};

        // Validate presence of `name`.
        if ( !userData.name ) {
            console.error( 'Options object passed to `User` constructor must a `name` key.' );
            return this;
        }

        // Ensure that num. `User` instances does not exceed num. of available 'symbols' (eg. 'x'/'o').
        if ( !symbols.length ) {
            console.error( 'Only 2x `User` instances may be created.' );
            return this;
        }

        // Construct `User` instance.
        this.id = ( users.length + 1 );
        this.name = userData.name || 'John Doe';
        this.symbol = symbols.shift();

        // Add instance to `user` 'class variable'.
        users.push( this );

        // Return instance.
        return this;
    }

     return User;
} )();