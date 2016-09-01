function switchStyle(style)

{
   document.getElementById("main").setAttribute("href", style);
}

// j'ai réussi cet exo grace à ce lien : https://openclassrooms.com/forum/sujet/changer-le-style-du-site-avec-un-bouton-1

function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id);
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id);
    }
    return true;
}


/* enlever la scroll barre 
var htmlElement = document.getElementsByTagName('html')[0];
htmlElement.style.overflow = 'hidden';
*/