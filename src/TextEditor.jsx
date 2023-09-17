import React, { useState } from "react";
import "react-trumbowyg/dist/trumbowyg.min.css";
import Trumbowyg from "react-trumbowyg";

const TextEditor = () => {
  const [desc, setDesc] = useState("");

  return (
    <div>
      <p>State: {JSON.stringify(desc)}</p>
      <Trumbowyg
        data={"<Hadith><Document> و قال <HadithQael><Innocent> امیر المومنین علیه السلام </Innocent></HadithQael></Document><Document> «قال <Exporter><Innocent> رسول الله صلی الله علیه و اله</Innocent></Exporter> : </Document> «اللهم ارحم خلفایی» قیل یا <Innocent> رسول الله</Innocent> و من خلفاوک قال «الذین یاتون من بعدی یروون حدیثی و سنتی » » .</Hadith>"}
        onChange={event => {
          console.log(event)
          setDesc(event.target.innerText)
        }}
      />
    </div>
  );
};

export default TextEditor;
