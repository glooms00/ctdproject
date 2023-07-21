export const imageTextData = {
    frameText1: "khnifra",
    overlayText: "Ahmed doiw",
    textZoneText: "Le Lorem Ipsum est simplement du faux texte employé",
  };
  
  export const paragraphTextData = {
    newText: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant",
    paragraphs: [
        "du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500",
        "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression",
        "Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression"
      ],
 };

 export const headerData = {
   title : "the Local's word",
 };
 export const cardData = (variant) => {
  if (variant === 'medium') {
    return {
      imageSource: require('./assets/Rectangle1170.png'),
      cityName: ' oum Errabia \n river',
    };
  } else {
    return {
      imageSource: require('./assets/Rectangle1169.png'),
      cityName: 'khnifra',
    };
  }
};