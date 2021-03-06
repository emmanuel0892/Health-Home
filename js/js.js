@import "lesshat";

.container{   
  width: 200px;
  height: 200px;
  //border: 1px solid blue;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top:20px;
}

.div-img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    .img{
        display:block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;   
        transform:scale(1);
        -ms-transform:scale(1); // IE 9 
        -moz-transform:scale(1); // Firefox 
        -webkit-transform:scale(1); // Safari and Chrome 
        -o-transform:scale(1); // Opera 
        -webkit-transition: all 500ms ease-in-out; // IE 9
        -moz-transition: all 500ms ease-in-out; // Firefox
        -ms-transition: all 500ms ease-in-out; // Safari and Chrome 
        -o-transition: all 500ms ease-in-out; // Opera       
    }        
    &:hover{
        .img{
            transform:scale(0.8);
            -ms-transform:scale(0.8); // IE 9 
            -moz-transform:scale(0.8); // Firefox 
            -webkit-transform:scale(0.8); // Safari and Chrome 
            -o-transform:scale(0.8); // Opera
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
        }
    
    } 
}