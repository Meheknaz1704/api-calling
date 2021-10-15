
import './App.css';
import {useState,useEffect} from "react";
import Card from "./component/card/card"
const url ="";



function App() {
  const [data,setData]=useState([]);

  useEffect(()=> {
    fetch(url)
    .then((response)=> response.json())
    .then((response)=> setData(response))
    .catch();
  }, []);
  console.log(data);


  return (
    <div className="App">
      <h1>Breaking Bad</h1>
      <ol>
        {data.map((item)=>(
          <li key={item.id}>{item.name}</li>
        
        ))}
        <div className="card"><Card 
        img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
        name="Walter White"
        birthday="09-07-1958"
        nickname="Heisenberg" />
        <Card
        img="https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441"
        name="Jesse Pinkman"
        birthday="09-24-1984"
        nickname="Cap n Cook" />
        <Card
        img="https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg"
        name="Skyler White"
        birthday="08-11-1970"
        nickname="Sky" />
        <Card
        img="https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg"
        name="Walter White Jr"
        birthday="07-08-1993"
        nickname="Flynn" />
        <Card
        img="https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136"
        name="Henry Schrader"
        birthday="Unknown"
        nickname="Hank" />
        <Card
        img="https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645"

        name="Marie Schrader"
        birthday="Unknown"
        nickname="Marie"
        />
        <Card
        img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg"
        name="Mike Ehrmantraut"
        birthday="Unknown"
        nickname="Mike"
        />
        <Card 
        img="https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846" 
        name="Saul Goodman"
        birthday="Unknown"
        nickname="Jimmy McGill"
        />
        <Card
        img="https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925"
        name="Gustavo Fring"
        birthday="Unknown"
        nickname="Gus"
        />
        <Card
        img="https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606"
        name="Hector Salamanca"
        birthday="Unknown"
        nickname="Don Hector"
        />
        <Card 
        img="https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554"
        name="Domingo Molina"
        birthday="Unknown"
      nickname="Krazy-8"
        />
        <Card 
        img="https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445"
        name="Tuco Salamanca"
        birthday="Unknown"
        nickname="Tuco"
        />
        <Card  
        img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg"
        name="Marco Leonel Salamanca "
        birthday="Unknown"
        nickname="The Cousins"
        />
        <Card
        img="https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg"
        name="Lydia Rodarte-Quayle"
        birthday="Unknown"
        nickname="Lydia"
        />
        <Card 
        img="https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303"
        name="Todd Alquist"
        birthday="Unknown 
        "nickname="Ricky Hitler"/>
        <Card 
        img="https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653"
        name="Jane Margolis"
        birthday="Unknown"
        nickname="Apology Girl"
        />
        <Card
        img="https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623"
        name="Skinny Pete"
        birthday="Unknown"
        nickname="Skinny"
        />
        <Card 
        img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg"
        name="Brandon Mayhew"
        birthday="Unknown"
        nickname="Badger"
        />
        <Card
        img="https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es"
        name="Huell Babineaux"
        birthday="Unknown"
        nickname="Huell"
        />
        <Card 
        img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg"
        name="Steven Gomez"
        birthday="Unknown"
        nickname="Gomie"
        />
        <Card 
        img="https://vignette.wikia.nocookie.net/breakingbad/images/b/bd/Cast_bb_700x1000_todd-beneke-lg.jpg/revision/latest?cb=20170723165057"
        name="Theodore Beneke"
        birthday="Unknown"
        nickname="Ted"
        />
        <Card
        img="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_gale-boetticher-lg.jpg"
        name="Gale Boetticher"
        birthday="Unknown"
        nickname="GB"
      /> </div>
        </ol>

    </div>
  );
}

export default App;
