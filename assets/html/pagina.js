 const MyHTML =
`
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: rgb(255, 255, 255);
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        height:100%;
      }
      h1 {
        color: rgb(32, 105, 223);
        text-align: center;
        border-bottom: 1px;
        border-bottom-color: rgb(93, 90, 90);
        border-bottom-style: solid;
        padding: 20px;
        margin-left:20px;
        margin-right:20px;
      }
      p {
        color: rgb(235, 21, 75);
        font-size: 30px;
      }

      
      .contenedor{
        width:100%;
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

    .contenedor p{
      border: 1px;
        border-color: rgb(93, 90, 90);
        border-style: solid;
        padding: 25px;
    }
  

    </style>
  </head>
  <body>
    <h1>Página HTML Local</h1>

    <div class="contenedor">
    <p>Página ejemplo html para Web view</p>
    
</div>
    
  </body>
</html>
`;

export default MyHTML;