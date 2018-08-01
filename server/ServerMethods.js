Meteor.methods({
 
tileSets() {return [//{
//ts:[

    {name:'main',
    tiles:[
        {apps:[], 
         clas:{tile:'true'},
         zone:'header', style: {display:'inline-block', float:'left',
 
         width:'100%',height:'40px', backgroundColor:"#ff5555"}       
        }, 

        {apps:[],
         clas:{tile:'true'}, 
         zone:'leftsidebar', style: {display:'inline-block',   float:'left', 
         width:'200px', height:'300px', backgroundColor:"#55ff55"}
        }, 

        {apps:['client1v1'], 
         clas:{tile:'true'},
         zone:'middle', style: {display:'inline-block', float:'left', 
         width:'300px', height:'400px', backgroundColor:"#a0a0ff"}
        }, 

        {apps:[], 
         clas:{tile:'true'},
         zone:'rightsidebar', style: {display:'inline-block', float:'left', 
         width:'200px', height:'400px', backgroundColor:"#ffff55"}
        }, 

        {apps:[], 
         clas:{tile:'true'},
         zone:'footer', style: {display:'inline-block', 
         width:'100%', height:'50px', backgroundColor:"#ff55ff"}
        }
     ]  //main tiles
    }, //main

    {name:'2nd',
     tiles:[
        {apps:['login','search'], 
         clas:{tile:'true'},
         zone:'header', style: {display:'inline',   
         width:'auto',height:'40px'}       
        }, 

        {apps:['login'],
         clas:{tile:'true'}, 
         zone:'leftsidebar', style: {display:'block', 
         width:'auto', height:'400px'}
        }, 

        {apps:['login'], 
         clas:{tile:'true'},
         zone:'middle', style: {display:'inline', 
         width:'auto', height:'400px'}
        } 

     ]  //2nd tiles
    } //2nd
] //}   //return
}   //tileSet function
})  //meteor methods 


