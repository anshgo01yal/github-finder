const github = new Github;
const ui = new UI;
const userData = document.addEventListener('keyup' , (e)=>
{
    const user = e.target.value;
    

    if(user !== '')
    {
        github.getUser(user)
        .then(data => {
            if(data.profile.message === 'Not Found')
            {
                           ui.noData();
            }
            else{ 
                 ui.showData(data.profile);

            }
        });
    }
    else{
        ui.clear();
    }
}
)