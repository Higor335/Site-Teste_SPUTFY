
   var perfil={
     loginADM:"ADM",
     senhaADM:"ADM123"
   }
 function verification(){

    let log=document.getElementById("nome").value.toUpperCase();
    let sen=document.getElementById("senha").value.toUpperCase();
    if(log==="" || sen===""){
       document.getElementById("textoShow").innerHTML="Preencha todos os campos"
       return;
    }
     if(log===perfil.loginADM && sen===perfil.senhaADM){
         alert(`Seja bem vindo ${perfil.loginADM}!`)
         document.write("hello")
         document.location.href="menu.html"
     }else{
     document.getElementById("textoShow").innerHTML="nome ou senha inválida"
     }
 }

 function selectionM(){
   const tipoDeMusica=document.getElementById('genero').value;
   const divTitulo=document.getElementById("tipoMusica");
   const musicas=document.getElementById("musicas1");
   const musicas2=document.getElementById("musicas2");
   const musicas3=document.getElementById("musicas3");
   console.log(`Você escolheu ${tipoDeMusica}`);
   divTitulo.innerHTML=tipoDeMusica;

   if(tipoDeMusica==="Rock"){
      musicas.innerHTML=rock1;
      musicas2.innerHTML=rock2;
      musicas3.innerHTML=rock3;
   }else
      if(tipoDeMusica==="Clássicas"){
         console.log("a tocar classicas")
         musicas.innerHTML=clas1;
         musicas2.innerHTML=clas2;
         musicas3.innerHTML=clas3;
      }else{
         musicas.innerHTML="";
         musicas2.innerHTML="";
         musicas3.innerHTML="";
      }
   
 }

function apagar(){
   let conteudo=document.getElementById("genero")
   conteudo.value="";
}




//--------------------------------------MÚSICAS ROCK--------------------------------------

 var rock1=`<abbr title="Breeze - Delicate Steve"><audio controls><source src="musicas/rock/Breeze - Delicate Steve.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Higher Octane - Vans in Japan"><audio controls><source src="musicas/rock/Higher Octane - Vans in Japan.mp3" type="audio/mpeg" controls></source></audio></abbr>

 <br><abbr title="Late Night Train - Vans in Japan"><audio controls><source src="musicas/rock/Late Night Train - Vans in Japan.mp3" type="audio/mpeg" controls></source></audio></abbr>

 <br><abbr title="Pressure Cooker - Jeremy Korpas"><audio controls><source src="musicas/rock/Pressure Cooker - Jeremy Korpas.mp3" type="audio/mpeg" controls></source></audio></abbr>

 <br><abbr title="Ten Inch Spikes - Jeremy Korpas"><audio controls><source src="musicas/rock/Ten Inch Spikes - Jeremy Korpas.mp3" type="audio/mpeg" controls></source></audio></abbr>`;

 var rock2=`<abbr title="That One Bar Scene - RKVC"><audio controls><source src="musicas/rock/That One Bar Scene - RKVC.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Twin Engines - Jeremy Korpas"><audio controls><source src="musicas/rock/Twin Engines - Jeremy Korpas.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Superfuzz Grind - Jeremy Korpas"><audio controls><source src="musicas/rock/Superfuzz Grind - Jeremy Korpas.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Stars Align - The 126ers"><audio controls><source src="musicas/rock/Stars Align - The 126ers.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Spy vs Spy - DJ Williams"><audio controls><source src="musicas/rock/Spy vs Spy - DJ Williams.mp3" type="audio/mpeg"></source></audio></abbr>`; 

var rock3=`
 <abbr title="Rage - The 126ers"><audio controls><source src="musicas/rock/Rage - The 126ers.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Potato Deal - Craig MacArthur"><audio controls><source src="musicas/rock/Potato Deal - Craig MacArthur.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Lazy Boy Blues - Unicorn Heads"><audio controls><source src="musicas/rock/Lazy Boy Blues - Unicorn Heads.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Friday Night Lights - RKVC"><audio controls><source src="musicas/rock/Friday Night Lights - RKVC.mp3" type="audio/mpeg"></source></audio></abbr>

 <br><abbr title="Blood, Sweat, No Tears - Jeremy Korpas"><audio controls><source src="musicas/rock/Blood, Sweat, No Tears - Jeremy Korpas.mp3" type="audio/mpeg"></source></audio></abbr>`;



//--------------------------------------MÚSICAS Clássicas--------------------------------------

var clas1=`<abbr title="A Baroque Letter - Aaron Kenny"><audio controls><source src="musicas/Classicas/A Baroque Letter - Aaron Kenny.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Allégro - Emmit Fenn"><audio controls><source src="musicas/Classicas/Allégro - Emmit Fenn.mp3" type="audio/mpeg" controls></source></audio></abbr>

<br><abbr title="Bach Cello Suite No. 1, G Major, Prelude - Cooper Cannell"><audio controls><source src="musicas/Classicas/Bach Cello Suite No. 1, G Major, Prelude - Cooper Cannell.mp3" type="audio/mpeg" controls></source></audio></abbr>

<br><abbr title="Bourree - Joel Cummins"><audio controls><source src="musicas/Classicas/Bourree - Joel Cummins.mp3" type="audio/mpeg" controls></source></audio></abbr>

<br><abbr title="City Plaza - Dan Bodan"><audio controls><source src="musicas/Classicas/City Plaza - Dan Bodan.mp3" type="audio/mpeg" controls></source></audio></abbr>`;

var clas2=`<abbr title="Impertinence - Joel Cummins"><audio controls><source src="musicas/Classicas/Impertinence - Joel Cummins.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Invitation to the Castle Ball - Doug Maxwell"><audio controls><source src="musicas/Classicas/Invitation to the Castle Ball - Doug Maxwell.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Lost In Prayer - Doug Maxwell"><audio controls><source src="musicas/Classicas/Lost In Prayer - Doug Maxwell.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Minyo San Kyoku - Doug Maxwell_ Zac Zinger"><audio controls><source src="musicas/Classicas/Minyo San Kyoku - Doug Maxwell_ Zac Zinger.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="No.5 The Day I Met Her - Esther Abrami"><audio controls><source src="musicas/Classicas/No.5 The Day I Met Her - Esther Abrami.mp3" type="audio/mpeg"></source></audio></abbr>`; 

var clas3=`
<abbr title="No.6 In My Dreams - Esther Abrami.mp3"><audio controls><source src="musicas/Classicas/No.6 In My Dreams - Esther Abrami.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Sailor's Song - Joel Cummins"><audio controls><source src="musicas/Classicas/Sailor's Song - Joel Cummins.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Sonatina No 2 in F Major Rondo - Joel Cummins"><audio controls><source src="musicas/Classicas/Sonatina No 2 in F Major Rondo - Joel Cummins.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Unknown Longing - Asher Fulero"><audio controls><source src="musicas/Classicas/Unknown Longing - Asher Fulero.mp3" type="audio/mpeg"></source></audio></abbr>

<br><abbr title="Wandering Soul - Asher Fulero"><audio controls><source src="musicas/Classicas/Wandering Soul - Asher Fulero.mp3" type="audio/mpeg"></source></audio></abbr>`;