import { ResumePDFText } from "./common";
import { ResumePDFSection } from "components/Resume/ResumePDF/common";

export const HeaderTV = () => {
  return (
   <>
    <ResumePDFSection style={{ display: "flex", marginTop: "1rem",flexDirection:'row'}}>
    <ResumePDFText
          style={{
            height: "60px",
            width: "60px",
            border: "5px solid transparent",
            borderRadius: "50%",
            borderLeft: "5px solid black",
            transform: "rotate(-50deg)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ResumePDFText
            style={{
              height: "40px",
              width: "40px",
              border: "5px solid black",
              borderRadius: "50%",
              borderLeft: "5px solid transparent",
              borderBottom: "5px solid transparent",
              transform: "rotate(-95deg)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ResumePDFText
              style={{
                height: "20px",
                width: "20px",
                border: "5px solid black",
                borderRadius: "50%",
                color: "transparent",
                borderBottom: "5px solid transparent",
                transform: "rotate(90deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              hi
            </ResumePDFText>
          </ResumePDFText>
        </ResumePDFText>
      <ResumePDFText
        style={{
          marginTop: "auto",
          marginBottom: "1px",
          marginLeft: "auto",
          marginRight: "1px",
        }}
      >
        Confidential - TestVagrant Technologies Private Limited
      </ResumePDFText>
    </ResumePDFSection></>
  );
};

export default HeaderTV;
