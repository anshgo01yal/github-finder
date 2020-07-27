class Github{
    constructor()
    {
       this.client_id = 'd9308aacf8b204d361fd';
       this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b5';


    }

    async getUser(userLog)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${userLog}? client_id = ${this.client_id}& client_secret = ${this.client_secret}`);

        const profile = await profileResponse.json()
        return {
            profile
        }
    }
}