import React from 'react'
import './Resume.css'
import html2canvas from 'html2canvas'
import {jsPDF} from 'jspdf'

const Resume = () => {
const rootRef = React.useRef();
    
    const downloadPdfDocument = () => {
        const pdfUrl = "https://drive.google.com/file/d/1Pr5v3PmTJD7kYSmTp03hrhHgDTgcDNHN/view?usp=sharing"
        window.open(pdfUrl, '_blank');
        // const element = rootRef.current;
        // const htmlInput = html2canvas(element,{
        //     jsPDF: {
        //         format: 'a4',
        //       },
        //       imageType: 'image/jpeg'
        // })
        // htmlInput.then(function(canvas) {
        //     console.log(canvas)
        //     const imgData = canvas.toDataURL('image/jpeg',1.0);
        //     console.log(imgData)
        //     console.log(decodedBase64)
        //     const pdf = new jsPDF();
        //     pdf.addImage(imgData, 'JPEG', 0, 0);
            
        //     // pdf.save(`Jabid_Abdul_Resume.pdf`);
        // }).catch(function(error){
        //     console.log(error)
        // })
    }
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <div style={{marginTop:'20px'}}>
                <button onClick={downloadPdfDocument} className="btn btn-primary">Download</button>
            </div>
            <div class="resumePdf" ref={rootRef}>
                <div id="page_1">
                <div id="p1dimg1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAAIXCAIAAAAt+m4OAAAJdElEQVR4nO3ZMQ7bMBQFQSrwnXkF/lMrRVpXcbECNNOofQVBLMTrnLMAADqftdbeu57xxcw8cxgP4YQAv3CHPMfM/Kk3AABvJ0cAgJgcAQBicgQAiMkRACAmRwCAmBwBAGJyBACIyREAICZHAICYHAEAYnIEAIjJEQAgJkcAgJgcAQBicgQAiMkRACB2nXPqDQDAq33WWnvvesYXM/PMYTyEEwL8wh3yHDPjsQYAiMkRACAmRwCAmBwBAGJyBACIyREAICZHAICYHAEAYnIEAIjJEQAgJkcAgJgcAQBicgQAiMkRACAmRwCAmBwBAGJyBACIyREAICZHAIDYdc6pNwAAr/ZZa+296xlfzMwzh/EQTgjwC3fIc8yMxxoAICZHAICYHAEAYnIEAIjJEQAgJkcAgJgcAQBicgQAiMkRACAmRwCAmBwBAGJyBACIyREAICZHAICYHAEAYnIEAIjJEQAgJkcAgJgcAQBicgQAiF3nnHoDAPBqn7XW3rue8cXMPHMYD+GEAL9whzzHzHisAQBicgQAiMkRACAmRwCAmBwBAGJyBACIyREAICZHAICYHAEAYnIEAIjJEQAgJkcAgJgcAQBicgQAiMkRACAmRwCAmBwBAGJyBACIyREAIHadc+oNAMCrXfd91xsAgFfzWAMAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AADE5AgDE5AgAEJMjAEBMjgAAMTkCAMTkCAAQkyMAQEyOAAAxOQIAxOQIABCTIwBATI4AALHPv891Xe0OfnTfdz0BAP6TvyMAQOwv4thCKIaC14cAAAAASUVORK5CYII=" id="p1img1" /></div>
                <table cellPadding={0} cellSpacing={0} className="t0">
                <tbody><tr>
                    <td colSpan={3} className="tr0 td0"><p className="p0 ft0">Jabid Abdul hamid</p></td>
                    <td colSpan={2} className="tr0 td1"><p className="p1 ft3"><span className="ft1">LinkedIn: </span><nobr><a href="https://www.linkedin.com/in/jabid-abdul-955028194/"><span className="ft2">jabid-abdul-955028194</span></a></nobr></p></td>
                </tr>
                <tr>
                    <td colSpan={3} className="tr1 td0"><p className="p0 ft1">Contact No: +917002252043</p></td>
                    <td colSpan={2} className="tr1 td1"><p className="p1 ft3"><span className="ft1">Github: </span><a href="https://github.com/Jabidabdul"><span className="ft2">Jabidabdul</span></a></p></td>
                </tr>
                <tr>
                    <td colSpan={3} className="tr2 td0"><p className="p0 ft1">Email: jabidabdul72@gmail.com</p></td>
                    <td className="tr2 td2"><p className="p2 ft4">&nbsp;</p></td>
                    <td className="tr2 td3"><p className="p2 ft4">&nbsp;</p></td>
                </tr>
                <tr>
                    <td className="tr3 td4"><p className="p2 ft4">&nbsp;</p></td>
                    <td className="tr3 td5"><p className="p2 ft4">&nbsp;</p></td>
                    <td rowSpan={2} className="tr4 td6"><p className="p3 ft5">Education</p></td>
                    <td className="tr5 td2"><p className="p2 ft4">&nbsp;</p></td>
                    <td className="tr5 td3"><p className="p2 ft4">&nbsp;</p></td>
                </tr>
                <tr>
                    <td className="tr6 td7"><p className="p2 ft6">&nbsp;</p></td>
                    <td className="tr6 td8"><p className="p2 ft6">&nbsp;</p></td>
                    <td className="tr6 td2"><p className="p2 ft6">&nbsp;</p></td>
                    <td className="tr6 td3"><p className="p2 ft6">&nbsp;</p></td>
                </tr>
                <tr>
                    <td className="tr7 td7"><p className="p4 ft7">Year</p></td>
                    <td colSpan={2} className="tr7 td9"><p className="p5 ft7">Degree/Examination</p></td>
                    <td className="tr7 td2"><p className="p6 ft7">Institution/Board</p></td>
                    <td className="tr7 td3"><p className="p7 ft7">CGPA/Percentage</p></td>
                </tr>
                <tr>
                    <td className="tr8 td7"><p className="p8 ft8">2021</p></td>
                    <td colSpan={2} className="tr8 td9"><p className="p2 ft8">B.E. (ECE)</p></td>
                    <td className="tr8 td2"><p className="p2 ft8">Barak Valley Engineering College, Karimganj, Assam</p></td>
                    <td className="tr8 td3"><p className="p9 ft9">74.86%</p></td>
                </tr>
                <tr>
                    <td className="tr2 td7"><p className="p8 ft8">2017</p></td>
                    <td colSpan={2} className="tr2 td9"><p className="p2 ft8">12th</p></td>
                    <td className="tr2 td2"><p className="p2 ft8">Kendriya Vidyalaya Panchgram, Hailakandi, Assam</p></td>
                    <td className="tr2 td3"><p className="p9 ft9">65.6%</p></td>
                </tr>
                <tr>
                    <td className="tr2 td7"><p className="p8 ft8">2015</p></td>
                    <td colSpan={2} className="tr2 td9"><p className="p2 ft8">10th</p></td>
                    <td className="tr2 td2"><p className="p2 ft8">Kendriya Vidyalaya Panchgram, Hailakandi, Assam</p></td>
                    <td className="tr2 td3"><p className="p9 ft9">8.0/10.0</p></td>
                </tr>
                <tr>
                    <td className="tr9 td4"><p className="p2 ft4">&nbsp;</p></td>
                    <td className="tr9 td5"><p className="p2 ft4">&nbsp;</p></td>
                    <td colSpan={2} rowSpan={2} className="tr10 td10"><p className="p3 ft5">Experience</p></td>
                    <td className="tr11 td3"><p className="p2 ft4">&nbsp;</p></td>
                </tr>
                <tr>
                    <td className="tr12 td7"><p className="p2 ft10">&nbsp;</p></td>
                    <td className="tr12 td8"><p className="p2 ft10">&nbsp;</p></td>
                    <td className="tr12 td3"><p className="p2 ft10">&nbsp;</p></td>
                </tr>
                <tr>
                    <td colSpan={4} className="tr1 td11"><p className="p2 ft11">Kudos Finance and Investment Pvt Ltd <span className="ft8">| Software Engineer</span></p></td>
                    <td className="tr1 td3"><p className="p10 ft8">October 2021 - December 2021</p></td>
                </tr>
                <tr>
                    <td colSpan={4} className="tr13 td11"><p className="p2 ft8">Working as Software Engineer, and the technology using is MERN stack</p></td>
                    <td className="tr13 td3"><p className="p2 ft4">&nbsp;</p></td>
                </tr>
                <tr>
                    <td colSpan={4} className="tr1 td11"><p className="p2 ft8">Learnt Git commands to connect github and local repos.</p></td>
                    <td className="tr1 td3"><p className="p2 ft4">&nbsp;</p></td>
                </tr>
                <tr>
                    <td className="tr14 td4"><p className="p2 ft4">&nbsp;</p></td>
                    <td className="tr14 td5"><p className="p2 ft4">&nbsp;</p></td>
                    <td colSpan={2} rowSpan={2} className="tr15 td10"><p className="p3 ft5">Internship and Certiﬁcations</p></td>
                    <td className="tr0 td3"><p className="p2 ft4">&nbsp;</p></td>
                </tr>
                <tr>
                    <td className="tr12 td7"><p className="p2 ft10">&nbsp;</p></td>
                    <td className="tr12 td8"><p className="p2 ft10">&nbsp;</p></td>
                    <td className="tr12 td3"><p className="p2 ft10">&nbsp;</p></td>
                </tr>
                <tr>
                    <td colSpan={4} className="tr1 td11"><p className="p2 ft8"><span className="ft11">Newton School </span>| Full Stack Web Development Bootcamp</p></td>
                    <td className="tr1 td3"><p className="p10 ft8">March 2021 - Present</p></td>
                </tr>
                </tbody></table>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Full Stack Web Development along with Problem Solving.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Technical Stack learned: HTML, CSS, JavaScript, and Bootstrap, Node JS, React JS,</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Participated in various Coding contest organized by the platform.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Worked on various projects like </span><nobr>To-do-list,</nobr> <nobr>Dice-Game,</nobr> Calculator.</p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Certiﬁcates are awarded for the completion of Data Structure(Java) , HTML, CSS, JavaScript, etc.</span></p>
                <table cellPadding={0} cellSpacing={0} className="t0">
                    <tbody><tr>
                        <td className="tr2 td12"><p className="p2 ft8"><span className="ft11">IIT Guwahati </span>| 32 Bit <nobr>RISC-V</nobr> Based Processor Design</p></td>
                        <td className="tr2 td13"><p className="p2 ft8">August 2020 - September 2020</p></td>
                    </tr>
                    </tbody></table>
                <p className="p12 ft8"><span className="ft8">•</span><span className="ft12">Learnt about a 32 bit processor , its simulations, its working, its data buses, address buses, each and every components, and also using it for automation.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Made a home automation project to demonstrate a fan speed varying in accordance with the environment</span></p>
                <table cellPadding={0} cellSpacing={0} className="t0">
                    <tbody><tr>
                        <td className="tr16 td12"><p className="p2 ft8"><span className="ft11">MSME Tool Center </span>| Python and Machine Learning</p></td>
                        <td className="tr16 td13"><p className="p2 ft8">August 2020 - September 2020</p></td>
                    </tr>
                    </tbody></table>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Learnt Python and its libraries.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Worked on Machine learning algorithms.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Made a </span><nobr>Tic-Tac-Toe</nobr> game using Python and its library ﬁles where two players can move one after another.</p>
                <table cellPadding={0} cellSpacing={0} className="t0">
                    <tbody><tr>
                        <td className="tr16 td12"><p className="p2 ft8"><span className="ft11">Doordarshan Kendra Silchar </span>| Film Making and Broadcasting</p></td>
                        <td className="tr16 td13"><p className="p2 ft8">December 2019 - January 2020</p></td>
                    </tr>
                    </tbody></table>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Learnt about how a complete ﬁlm is being edited and tested before its get telecasted.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Role: Telecasted a video which was casted after its get ﬁltered out with all the noises</span></p>
                <p className="p13 ft5">Projects</p>
                <table cellPadding={0} cellSpacing={0} className="t1">
                    <tbody><tr>
                        <td className="tr17 td14"><p className="p2 ft8"><span className="ft11">OTP veriﬁcation UI </span>| Kudos Finance and Investment Pvt Ltd</p></td>
                        <td colSpan={2} className="tr17 td15"><p className="p10 ft8">December 2021 - December 2021</p></td>
                    </tr>
                    <tr>
                        <td className="tr8 td14"><p className="p2 ft8">Created UI for verifying an user with the help of an otp sent to the users mobile</p></td>
                        <td className="tr8 td16"><p className="p2 ft4">&nbsp;</p></td>
                        <td className="tr8 td17"><p className="p2 ft4">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td className="tr17 td14"><p className="p2 ft8"><span className="ft11">Reducing Rate EMI Calculator </span>| Kudos Finance and Investment Pvt Ltd <a href="https://lmsutils-ui.onrender.com/"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr17 td16"><p className="p14 ft8">November 2021</p></td>
                        <td className="tr17 td17"><p className="p10 ft8">- November 2021</p></td>
                    </tr>
                    <tr>
                        <td className="tr1 td14"><p className="p2 ft8">Created an ui and an end point for calculating reducing rate emi per month</p></td>
                        <td className="tr1 td16"><p className="p2 ft4">&nbsp;</p></td>
                        <td className="tr1 td17"><p className="p2 ft4">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="tr18 td18"><p className="p2 ft8"><span className="ft11">Created End points for various http requests </span>| Kudos Finance and Investment Pvt Ltd November 2021</p></td>
                        <td className="tr18 td17"><p className="p10 ft8">- December 2021</p></td>
                    </tr>
                    <tr>
                        <td className="tr19 td14"><p className="p2 ft8">An end point was created to add IFSC code to every user using a post request</p></td>
                        <td className="tr19 td16"><p className="p2 ft4">&nbsp;</p></td>
                        <td className="tr19 td17"><p className="p2 ft4">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td className="tr8 td14"><p className="p2 ft8">An end point was created for the EMI calculation (Reducing rate)</p></td>
                        <td className="tr8 td16"><p className="p2 ft4">&nbsp;</p></td>
                        <td className="tr8 td17"><p className="p2 ft4">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td className="tr16 td14"><p className="p2 ft8"><span className="ft11">Post Oﬃce details from Pincode </span>| Kudos Finance and Investment Pvt Ltd <a href="https://geo-utils-ui.onrender.com/"><span className="ft13">(link)</span></a></p></td>
                        <td colSpan={2} className="tr16 td15"><p className="p10 ft8">October 2021 - October 2021</p></td>
                    </tr>
                    <tr>
                        <td className="tr8 td14"><p className="p2 ft8">UI is created to help the user to get the Post Oﬃce details as per the pincode.</p></td>
                        <td className="tr8 td16"><p className="p2 ft4">&nbsp;</p></td>
                        <td className="tr8 td17"><p className="p2 ft4">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td className="tr17 td14"><p className="p2 ft8"><span className="ft11">HTML Agreements(Handlebars) </span>| Kudos Fianance and Investment Pvt Ltd <a href="https://stagingplatformapi.kudosfinance.in/v3/ui/esign/preview?kudos_loan_id=7590437038898&partner_loan_id_hash=2b00452ebc2947ae4ba3324f2ff7cb767049449f82255fd45864eba735b7d2df"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr17 td16"><p className="p14 ft8">October 2021</p></td>
                        <td className="tr17 td17"><p className="p10 ft8">- November 2021</p></td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="tr8 td18"><p className="p2 ft8">Worked on diﬀerent agreement to have an agreement with partner companies using handlebars</p></td>
                        <td className="tr8 td17"><p className="p2 ft4">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td className="tr20 td14"><p className="p2 ft8"><span className="ft11">Reminder </span>| Newton School <a href="https://jabidabdul.github.io/TO-DO-LIST-REACTJS-NS.github.io/"><span className="ft13">(link)</span></a></p></td>
                        <td colSpan={2} className="tr20 td15"><p className="p10 ft8">August 2021 - August 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p15 ft8"><span className="ft8">•</span><span className="ft12">Reminder: In this application users can keep their daily tasks and can ﬁlter every tasks according to the days weeks or months.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Features: Can add multiple Tasks.</span></p>
                <p className="p11 ft8"><span className="ft8">•</span><span className="ft12">Role: Developer | Tech Stack: REACTJS (JavaScript, HTML, CSS.)</span></p>
                </div>
                <div id="page_2">
                <div id="p2dimg1">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAACCAIAAAA1lLLgAAAAEUlEQVQokWNgGAWjYBQMLAAAA4YAAZNgNvEAAAAASUVORK5CYII=" id="p2img1" /></div>
                <table cellPadding={0} cellSpacing={0} className="t2">
                    <tbody><tr>
                        <td className="tr2 td19"><p className="p2 ft11">Hostel Accommodation <span className="ft8">| Newton School </span><a href="https://jabidabdul.github.io/Hostel-Accomodation-NS.github.io/"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr2 td20"><p className="p2 ft8">August 2021 - August 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Hostel Accommodation: A very useful application to allot a room in the boys or girls hostel</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Features: Authenticate using Google or Facebook, .</span></p>
                <p className="p17 ft8"><span className="ft8">•</span><span className="ft12">Role: Developer | Tech Stack: REACTJS (JavaScript, HTML, CSS.)</span></p>
                <table cellPadding={0} cellSpacing={0} className="t3">
                    <tbody><tr>
                        <td className="tr2 td19"><p className="p2 ft8"><span className="ft11">Netﬂix_clone </span>| Newton School <a href="https://jabidabdul.github.io/netflix_clone.github.io/"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr2 td20"><p className="p2 ft8">August 2021 - August 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Netﬂix_clone: In this application uses netlix APIs and components to get a netﬂix clone .</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Features: Added some lists to get direct links</span></p>
                <p className="p17 ft8"><span className="ft8">•</span><span className="ft12">Role: Developer | Tech Stack: REACTJS (JavaScript, HTML, CSS.)</span></p>
                <table cellPadding={0} cellSpacing={0} className="t4">
                    <tbody><tr>
                        <td className="tr8 td21"><p className="p2 ft8"><span className="ft11">Pig Game </span>| Newton School <a href="https://jabidabdul.github.io/diceGame.github.io/"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr8 td22"><p className="p2 ft8">July 2021 - July 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Pig Game: A Game for fun where two players can play using dice.</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Features: Multiply, Add, Subtract, Divide.</span></p>
                <p className="p17 ft8"><span className="ft8">•</span><span className="ft12">Role: Developer | Tech Stack: JavaScript, HTML, CSS.</span></p>
                <table cellPadding={0} cellSpacing={0} className="t5">
                    <tbody><tr>
                        <td className="tr2 td21"><p className="p2 ft8"><nobr><span className="ft11">To-Do</span></nobr><span className="ft11"> List </span>| Newton School <a href="https://jabidabdul.github.io/TO_DO_List.github.io/"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr2 td22"><p className="p2 ft8">July 2021 - July 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p16 ft8"><span className="ft8">•</span><nobr><span className="ft12">To-Do</span></nobr> List: In this application users can keep their daily tasks and can remind it too.</p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Features: Can add and Delete Your Tasks.</span></p>
                <p className="p17 ft8"><span className="ft8">•</span><span className="ft12">Role: Developer | Tech Stack: JavaScript, HTML, CSS.</span></p>
                <table cellPadding={0} cellSpacing={0} className="t3">
                    <tbody><tr>
                        <td className="tr2 td23"><p className="p2 ft8"><span className="ft11">Calculator </span>| Newton School <a href="http://jabidabdul.github.io/Calculatorgithub.io/"><span className="ft13">(link)</span></a></p></td>
                        <td className="tr2 td24"><p className="p2 ft8">June 2021 - June 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Calculator: where users can perform calculation as well as can solve expressions based on BODMAS.</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Features: Multiply, Add, Subtract, Divide.</span></p>
                <p className="p17 ft8"><span className="ft8">•</span><span className="ft12">Role: Developer | Tech Stack: JavaScript, HTML, CSS.</span></p>
                <table cellPadding={0} cellSpacing={0} className="t4">
                    <tbody><tr>
                        <td className="tr8 td25"><p className="p2 ft11">Heart Rate and Heart Rate Variability <span className="ft8">| Barak Valley Engineering College</span></p></td>
                        <td className="tr8 td26"><p className="p2 ft8">June 2020 - July 2021</p></td>
                    </tr>
                    </tbody></table>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Simulator: MATLAB Simulation.</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">It can basically be used to detect heart rate and its variability of any person.</span></p>
                <p className="p17 ft8"><span className="ft8">•</span><span className="ft12">Used diﬀerent data to demonstrate the working principle with the help of our formula</span></p>
                <table cellPadding={0} cellSpacing={0} className="t6">
                    <tbody><tr>
                        <td className="tr16 td27"><p className="p2 ft4">&nbsp;</p></td>
                        <td rowSpan={2} className="tr21 td28"><p className="p3 ft5">Skills</p></td>
                    </tr>
                    <tr>
                        <td className="tr12 td29"><p className="p2 ft10">&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td className="tr18 td29"><p className="p10 ft8">Computer languages</p></td>
                        <td className="tr18 td28"><p className="p3 ft8">Python, C++, C, Java, JavaScript, CSS, HTML</p></td>
                    </tr>
                    <tr>
                        <td className="tr19 td29"><p className="p10 ft8">Software Packages</p></td>
                        <td className="tr19 td28"><p className="p3 ft8">Node, MySQL, Express, React, Bootstrap</p></td>
                    </tr>
                    <tr>
                        <td className="tr19 td29"><p className="p10 ft8">Additional Courses Taken</p></td>
                        <td className="tr19 td28"><p className="p3 ft8">Data Structure</p></td>
                    </tr>
                    <tr>
                        <td className="tr1 td29"><p className="p10 ft8">Soft Skills</p></td>
                        <td className="tr1 td28"><p className="p3 ft8">Interpersonal communication, Public speaking, <nobr>Decision-making,</nobr> Creativity, Communication Skills</p></td>
                    </tr>
                    </tbody></table>
                <p className="p18 ft5"><nobr>Co-Curricular</nobr> Activities</p>
                <p className="p19 ft8"><span className="ft8">•</span><span className="ft12">Best Athlete in my college for securing most of the gold medal.</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">Organized a picnic party considering all the comforts and enjoyments for my whole batch in my college.</span></p>
                <p className="p16 ft8"><span className="ft8">•</span><span className="ft12">A three time consecutive gold medalist in </span><nobr>Kho-Kho</nobr> of regional sports meet when I was in school.</p>
                <p className="p20 ft8"><span className="ft8">•</span><span className="ft12">Lead my football team in another regional sports meet held in another year of my school.</span></p>
                </div>
            </div>
        
      </div>
        
    )
}

export default Resume
