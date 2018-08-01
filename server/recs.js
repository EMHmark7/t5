Meteor.methods({
 
recs() {return {

client1v1:[

   {GrTitle:'Personal Profile', grLbl:'First/Last Names', w:'50px',

    f:[{ f:'fname', blk:'tx', lblPos:'top', eol:'0', wr:'true'},
       { f:'lname', blk:'tx', lblPos:'top', eol:'1', wr:'true'}  ]},

   {GrTitle:'',Grlbl:'',lbl:'', w:'50px',
    f:[{f:'m_f', blk:'tx', lblPos:'left', eol:'0', wr:'true'},
       {f:'age', blk:'tx', lblPos:'left', eol:'1', wr:'true'}   ]},

], //client1v1

}} })   //return /function /meteor methods 
