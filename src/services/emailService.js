import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const welcomeEmail = async (
  email,
  name,

  orderNumber,
  planprice,
  phoneNumber,
  planname
) => {
  const msg = {
    to: email,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>
    
        <style type="text/css">
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-33p33 {
              width: 199.98px !important;
            }
    
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
    
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: 100% !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors="true"] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
          #u_body a {
            color: #fc653c;
            text-decoration: underline;
          }
          @media (max-width: 480px) {
            #u_content_image_1 .v-src-width {
              width: auto !important;
            }
            #u_content_image_1 .v-src-max-width {
              max-width: 65% !important;
            }
            #u_content_heading_2 .v-color {
              color: #fc653c !important;
            }
            #u_content_heading_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_text_2 .v-container-padding-padding {
              padding: 0px 20px 20px !important;
            }
            #u_content_text_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_button_1 .v-button-colors {
              color: #ffffff !important;
              background-color: #000000 !important;
            }
            #u_content_button_1 .v-button-colors:hover {
              color: #ffffff !important;
              background-color: #3aaee0 !important;
            }
            #u_content_button_1 .v-size-width {
              width: 50% !important;
            }
            #u_column_11 .v-col-background-color {
              background-color: #fc653c !important;
            }
            #u_content_social_1 .v-container-padding-padding {
              padding: 17px !important;
            }
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
      </head>
    
      <body
        class="clean-body u_body"
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #ecf0f1;
          color: #000000;
        "
      >
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
          id="u_body"
          style="
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #ecf0f1;
            width: 100%;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr style="vertical-align: top">
              <td
                style="
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                "
              >
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_image_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 50px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          class="v-text-align"
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304265085.png"
                                            alt="email icon"
                                            title="email icon"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 33%;
                                              max-width: 191.4px;
                                            "
                                            width="191.4"
                                            class="v-src-width v-src-max-width"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        color: #fc653c;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 22px;
                                        font-weight: 400;
                                      "
                                    >
                                      "Thank you!"
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_heading_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 35px 30px 0px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      <strong>Hi ${name}!</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_text_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 30px 20px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        line-height: 170%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%">
                                        Your order with verticalsols is confirmed!
                                        Thank you for choosing us as your trusted IT
                                        service provider. We appreciate your
                                        business and are committed to delivering
                                        exceptional solutions tailored to your
                                        needs. Our team is working diligently to
                                        fulfill your order and provide you with a
                                        seamless experience. If you have any
                                        questions or need assistance, our dedicated
                                        support team is here to help. We look
                                        forward to exceeding your expectations.
                                      </p>
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%"> </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ecf0f1;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ecf0f1;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">Order No.</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            
    
                          <table
                          style="font-family: 'Rubik', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Rubik', sans-serif;
                                "
                                align="left"
                              >
                              
                                <div
                                  class="v-color v-text-align"
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                  <p style="line-height: 140%">Plan Name</p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                          
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                  
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">Product Price</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ecf0f1;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ecf0f1;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                        #786${orderNumber}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                       ${planname}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                       $${planprice}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      height="0px"
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        border-top: 1px solid #bbbbbb;
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                              font-size: 0px;
                                              line-height: 0px;
                                              mso-line-height-rule: exactly;
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <span>&#160;</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 10px 5px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      Need Help? <br />Our Dedicated Support Team is
                                      Here for You!
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_button_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 30px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <!--[if mso
                                      ]><style>
                                        .v-button {
                                          background: transparent !important;
                                        }
                                      </style><!
                                    [endif]-->
                                    <div class="v-text-align" align="center">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%"  stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Rubik',sans-serif;"><![endif]-->
                                      <a
                                        href="https://www.verticalsols.com/contact"
                                        target="_blank"
                                        class="v-button v-size-width v-button-colors"
                                        style="
                                          box-sizing: border-box;
                                          display: inline-block;
                                          font-family: 'Rubik', sans-serif;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          text-align: center;
                                          color: #ffffff;
                                          background-color: #000000;
                                          border-radius: 4px;
                                          -webkit-border-radius: 4px;
                                          -moz-border-radius: 4px;
                                          width: 30%;
                                          max-width: 100%;
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          word-wrap: break-word;
                                          mso-border-alt: none;
                                          font-size: 14px;
                                        "
                                      >
                                        <span
                                          style="
                                            display: block;
                                            padding: 10px 20px;
                                            line-height: 120%;
                                          "
                                          ><span style="line-height: 16.8px"
                                            >Contact Us</span
                                          ></span
                                        >
                                      </a>
                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ecf0f1;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        id="u_column_11"
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ecf0f1;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_social_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 30px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div align="center">
                                      <div style="display: table; max-width: 187px">
                                        <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.facebook.com/verticalsols"
                                                  title="Facebook"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304165450.png"
                                                    alt="Facebook"
                                                    title="Facebook"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://twitter.com/VerticalSols"
                                                  title="Twitter"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304294935.png"
                                                    alt="Twitter"
                                                    title="Twitter"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://instagram.com/verticalsolspvt?igshid=NTc4MTIwNjQ2YQ=="
                                                  title="Instagram"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304234460.png"
                                                    alt="Instagram"
                                                    title="Instagram"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 0px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.youtube.com/@verticalsols"
                                                  title="YouTube"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304319664.png"
                                                    alt="YouTube"
                                                    title="YouTube"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 40px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        color: #ffffff;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >This email was intended for (Person Id
                                          Name), because you signed up for
                                          verticalsols | Unsubscribe | The links in
                                          this email will always direct to
                                          https://verticalsols.com. Learn about
                                          email security and online safety. </span
                                        ><br /><span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >© Verticalsols Pvt Ltd. 2023</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

const productPricingwelcomeEmail = async (email, name, appName) => {
  console.log("Emailwriting>>>>>>", email, name, appName);
  const msg = {
    to: email,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>
    
        <style type="text/css">
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-33p33 {
              width: 199.98px !important;
            }
    
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
    
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: 100% !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors="true"] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
          #u_body a {
            color: #fc653c;
            text-decoration: underline;
          }
          @media (max-width: 480px) {
            #u_content_image_1 .v-src-width {
              width: auto !important;
            }
            #u_content_image_1 .v-src-max-width {
              max-width: 65% !important;
            }
            #u_content_heading_2 .v-color {
              color: #fc653c !important;
            }
            #u_content_heading_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_text_2 .v-container-padding-padding {
              padding: 0px 20px 20px !important;
            }
            #u_content_text_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_button_1 .v-button-colors {
              color: #ffffff !important;
              background-color: #000000 !important;
            }
            #u_content_button_1 .v-button-colors:hover {
              color: #ffffff !important;
              background-color: #3aaee0 !important;
            }
            #u_content_button_1 .v-size-width {
              width: 50% !important;
            }
            #u_column_11 .v-col-background-color {
              background-color: #fc653c !important;
            }
            #u_content_social_1 .v-container-padding-padding {
              padding: 17px !important;
            }
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
      </head>
    
      <body
        class="clean-body u_body"
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #ecf0f1;
          color: #000000;
        "
      >
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
          id="u_body"
          style="
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #ecf0f1;
            width: 100%;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr style="vertical-align: top">
              <td
                style="
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                "
              >
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_image_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 50px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          class="v-text-align"
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304265085.png"
                                            alt="email icon"
                                            title="email icon"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 33%;
                                              max-width: 191.4px;
                                            "
                                            width="191.4"
                                            class="v-src-width v-src-max-width"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        color: #fc653c;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 22px;
                                        font-weight: 400;
                                      "
                                    >
                                      "Thank you!"
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_heading_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 35px 30px 0px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      <strong>Hi ${name}!</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_text_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 30px 20px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        line-height: 170%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%">
                                        Your Product order with verticalsols is confirmed!
                                        Thank you for choosing us as your trusted IT
                                        service provider. We appreciate your
                                        business and are committed to delivering
                                        exceptional solutions tailored to your
                                        needs. Our team is working diligently to
                                        fulfill your order and provide you with a
                                        seamless experience. If you have any
                                        questions or need assistance, our dedicated
                                        support team is here to help. We look
                                        forward to exceeding your expectations.
                                      </p>
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%"> </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ecf0f1;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ecf0f1;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                     
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            
    
                          <table
                          style="font-family: 'Rubik', sans-serif"
                          role="presentation"
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="v-container-padding-padding"
                                style="
                                  overflow-wrap: break-word;
                                  word-break: break-word;
                                  padding: 10px;
                                  font-family: 'Rubik', sans-serif;
                                "
                                align="left"
                              >
                              
                                <div
                                  class="v-color v-text-align"
                                  style="
                                    font-size: 14px;
                                    line-height: 140%;
                                    text-align: center;
                                    word-wrap: break-word;
                                  "
                                >
                                 
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                          
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                  
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">App Name</p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ecf0f1;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ecf0f1;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                        
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-33p33"
                        style="
                          max-width: 320px;
                          min-width: 200px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        font-size: 14px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                       ${appName}
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      height="0px"
                                      align="center"
                                      border="0"
                                      cellpadding="0"
                                      cellspacing="0"
                                      width="100%"
                                      style="
                                        border-collapse: collapse;
                                        table-layout: fixed;
                                        border-spacing: 0;
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        vertical-align: top;
                                        border-top: 1px solid #bbbbbb;
                                        -ms-text-size-adjust: 100%;
                                        -webkit-text-size-adjust: 100%;
                                      "
                                    >
                                      <tbody>
                                        <tr style="vertical-align: top">
                                          <td
                                            style="
                                              word-break: break-word;
                                              border-collapse: collapse !important;
                                              vertical-align: top;
                                              font-size: 0px;
                                              line-height: 0px;
                                              mso-line-height-rule: exactly;
                                              -ms-text-size-adjust: 100%;
                                              -webkit-text-size-adjust: 100%;
                                            "
                                          >
                                            <span>&#160;</span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                   
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 10px 5px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      Need Help? <br />Our Dedicated Support Team is
                                      Here for You!
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_button_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 30px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <!--[if mso
                                      ]><style>
                                        .v-button {
                                          background: transparent !important;
                                        }
                                      </style><!
                                    [endif]-->
                                    <div class="v-text-align" align="center">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%"  stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Rubik',sans-serif;"><![endif]-->
                                      <a
                                        href="https://www.verticalsols.com/contact"
                                        target="_blank"
                                        class="v-button v-size-width v-button-colors"
                                        style="
                                          box-sizing: border-box;
                                          display: inline-block;
                                          font-family: 'Rubik', sans-serif;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          text-align: center;
                                          color: #ffffff;
                                          background-color: #000000;
                                          border-radius: 4px;
                                          -webkit-border-radius: 4px;
                                          -moz-border-radius: 4px;
                                          width: 30%;
                                          max-width: 100%;
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          word-wrap: break-word;
                                          mso-border-alt: none;
                                          font-size: 14px;
                                        "
                                      >
                                        <span
                                          style="
                                            display: block;
                                            padding: 10px 20px;
                                            line-height: 120%;
                                          "
                                          ><span style="line-height: 16.8px"
                                            >Contact Us</span
                                          ></span
                                        >
                                      </a>
                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ecf0f1;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        id="u_column_11"
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ecf0f1;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_social_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 30px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div align="center">
                                      <div style="display: table; max-width: 187px">
                                        <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.facebook.com/verticalsols"
                                                  title="Facebook"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304165450.png"
                                                    alt="Facebook"
                                                    title="Facebook"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://twitter.com/VerticalSols"
                                                  title="Twitter"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304294935.png"
                                                    alt="Twitter"
                                                    title="Twitter"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://instagram.com/verticalsolspvt?igshid=NTc4MTIwNjQ2YQ=="
                                                  title="Instagram"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304234460.png"
                                                    alt="Instagram"
                                                    title="Instagram"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 0px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.youtube.com/@verticalsols"
                                                  title="YouTube"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304319664.png"
                                                    alt="YouTube"
                                                    title="YouTube"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 40px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        color: #ffffff;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >This email was intended for (Person Id
                                          Name), because you signed up for
                                          verticalsols | Unsubscribe | The links in
                                          this email will always direct to
                                          https://verticalsols.com. Learn about
                                          email security and online safety. </span
                                        ><br /><span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >© Verticalsols Pvt Ltd. 2023</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

const productPricingreceivedEmail = async (
  companyEmail,
  clientEmail,
  clientName,
  projectRequirmentReady,
  peopleWorking,
  appName
) => {
  console.log(phoneNumber);
  const msg = {
    to: companyEmail,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at verticalsols`,
    html: `<h1>Email:${clientEmail}</h1>
    <p>Name:${clientName}</p>
    <p>Project requirements ready:${projectRequirmentReady}</p>
    <p>How Many People Working:${peopleWorking}</p>
    <p>App Name:${appName}</p>
  
    
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

const receivedEmail = async (
  companyEmail,
  clientEmail,
  clientName,
  orderNumber,
  planprice,
  phoneNumber,

  planname
) => {
  console.log(phoneNumber);
  const msg = {
    to: companyEmail,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at verticalsols`,
    html: `<h1>Email:${clientEmail}</h1>
    <p>Name:${clientName}</p>
    <p>Order Number:${orderNumber}</p>
    <p>Plan Price:${planprice}</p>
    <p>Plan Name:${planname}</p>
    <p>Phone Number:${phoneNumber}</p>
    
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getQuoteEmail = async (email, fullName) => {
  const msg = {
    to: email,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>
    
        <style type="text/css">
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-33p33 {
              width: 199.98px !important;
            }
    
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
    
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: 100% !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors="true"] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
          #u_body a {
            color: #fc653c;
            text-decoration: underline;
          }
          @media (max-width: 480px) {
            #u_content_image_1 .v-src-width {
              width: auto !important;
            }
            #u_content_image_1 .v-src-max-width {
              max-width: 65% !important;
            }
            #u_content_heading_2 .v-color {
              color: #fc653c !important;
            }
            #u_content_heading_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_text_2 .v-container-padding-padding {
              padding: 0px 20px 20px !important;
            }
            #u_content_text_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_button_1 .v-button-colors {
              color: #ffffff !important;
              background-color: #000000 !important;
            }
            #u_content_button_1 .v-button-colors:hover {
              color: #ffffff !important;
              background-color: #3aaee0 !important;
            }
            #u_content_button_1 .v-size-width {
              width: 50% !important;
            }
            #u_column_11 .v-col-background-color {
              background-color: #fc653c !important;
            }
            #u_content_social_1 .v-container-padding-padding {
              padding: 17px !important;
            }
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
      </head>
    
      <body
        class="clean-body u_body"
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #ecf0f1;
          color: #000000;
        "
      >
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
          id="u_body"
          style="
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #ecf0f1;
            width: 100%;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr style="vertical-align: top">
              <td
                style="
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                "
              >
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_image_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 50px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          class="v-text-align"
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304265085.png"
                                            alt="email icon"
                                            title="email icon"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 33%;
                                              max-width: 191.4px;
                                            "
                                            width="191.4"
                                            class="v-src-width v-src-max-width"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        color: #fc653c;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 22px;
                                        font-weight: 400;
                                      "
                                    >
                                      "Thank you!"
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_heading_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 35px 30px 0px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      <strong>Hi ${fullName}!</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_text_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 30px 20px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        line-height: 170%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%">
                                      We got news for you! Hello ${fullName}! Thank you for reaching out. We value your inquiry, and one of our customer service representatives will be in touch with you within the next 24 hours. We look forward to assisting you soon!
                                      </p>
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%"> </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ecf0f1;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ecf0f1;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 10px 5px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      Need Help? <br />Our Dedicated Support Team is
                                      Here for You!
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_button_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 30px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <!--[if mso
                                      ]><style>
                                        .v-button {
                                          background: transparent !important;
                                        }
                                      </style><!
                                    [endif]-->
                                    <div class="v-text-align" align="center">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%"  stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Rubik',sans-serif;"><![endif]-->
                                      <a
                                        href="https://www.verticalsols.com"
                                        target="_blank"
                                        class="v-button v-size-width v-button-colors"
                                        style="
                                          box-sizing: border-box;
                                          display: inline-block;
                                          font-family: 'Rubik', sans-serif;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          text-align: center;
                                          color: #ffffff;
                                          background-color: #000000;
                                          border-radius: 4px;
                                          -webkit-border-radius: 4px;
                                          -moz-border-radius: 4px;
                                          width: 30%;
                                          max-width: 100%;
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          word-wrap: break-word;
                                          mso-border-alt: none;
                                          font-size: 14px;
                                        "
                                      >
                                        <span
                                          style="
                                            display: block;
                                            padding: 10px 20px;
                                            line-height: 120%;
                                          "
                                          ><span style="line-height: 16.8px"
                                            >Contact Us</span
                                          ></span
                                        >
                                      </a>
                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ecf0f1;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        id="u_column_11"
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ecf0f1;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_social_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 30px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div align="center">
                                      <div style="display: table; max-width: 187px">
                                        <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.facebook.com/verticalsols"
                                                  title="Facebook"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304165450.png"
                                                    alt="Facebook"
                                                    title="Facebook"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://twitter.com/VerticalSols"
                                                  title="Twitter"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304294935.png"
                                                    alt="Twitter"
                                                    title="Twitter"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://instagram.com/verticalsolspvt?igshid=NTc4MTIwNjQ2YQ=="
                                                  title="Instagram"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304234460.png"
                                                    alt="Instagram"
                                                    title="Instagram"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 0px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.youtube.com/@verticalsols"
                                                  title="YouTube"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304319664.png"
                                                    alt="YouTube"
                                                    title="YouTube"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 40px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        color: #ffffff;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >This email was intended for (Person Id
                                          Name), because you signed up for
                                          verticalsols | Unsubscribe | The links in
                                          this email will always direct to
                                          https://verticalsols.com. Learn about
                                          email security and online safety. </span
                                        ><br /><span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >© Verticalsols Pvt Ltd. 2023</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};
const getQoutereceivedEmail = async (
  companyEmail,
  clientEmail,
  clientName,
  selectRequirments,
  date
) => {
  const msg = {
    to: companyEmail,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<h2>Get A Qoute Email</h2>
    <p>Client Email : ${clientEmail}</p>
    <p>Client Name : ${clientName}</p>
    <p>Requirements : ${selectRequirments}</p>
    <p>Date : ${date}</p>
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};
const realEstatereceivedEmail = async (
  companyEmail,
  clientEmail,
  clientName,
  phoneNumber,
  writeMessage
) => {
  const msg = {
    to: companyEmail,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<h2>Get A Qoute Email</h2>
    <p>Client Email : ${clientEmail}</p>
    <p>Client Name : ${clientName}</p>
    <p>Phone Number : ${phoneNumber}</p>
    <p>Message : ${writeMessage}</p>
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

const newsLetterEmail = async (emailAddress) => {
  const msg = {
    to: emailAddress,
    from: {
      name: "Verticalsols Pvt. Ltd.",
      email: "operations@verticalsols.com",
    },
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
    >
      <head>
        <!--[if gte mso 9]>
          <xml>
            <o:OfficeDocumentSettings>
              <o:AllowPNG />
              <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
          </xml>
        <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="x-apple-disable-message-reformatting" />
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!--<![endif]-->
        <title></title>
    
        <style type="text/css">
          @media only screen and (min-width: 620px) {
            .u-row {
              width: 600px !important;
            }
            .u-row .u-col {
              vertical-align: top;
            }
    
            .u-row .u-col-33p33 {
              width: 199.98px !important;
            }
    
            .u-row .u-col-100 {
              width: 600px !important;
            }
          }
    
          @media (max-width: 620px) {
            .u-row-container {
              max-width: 100% !important;
              padding-left: 0px !important;
              padding-right: 0px !important;
            }
            .u-row .u-col {
              min-width: 320px !important;
              max-width: 100% !important;
              display: block !important;
            }
            .u-row {
              width: 100% !important;
            }
            .u-col {
              width: 100% !important;
            }
            .u-col > div {
              margin: 0 auto;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
    
          table,
          tr,
          td {
            vertical-align: top;
            border-collapse: collapse;
          }
    
          p {
            margin: 0;
          }
    
          .ie-container table,
          .mso-container table {
            table-layout: fixed;
          }
    
          * {
            line-height: inherit;
          }
    
          a[x-apple-data-detectors="true"] {
            color: inherit !important;
            text-decoration: none !important;
          }
    
          table,
          td {
            color: #000000;
          }
          #u_body a {
            color: #fc653c;
            text-decoration: underline;
          }
          @media (max-width: 480px) {
            #u_content_image_1 .v-src-width {
              width: auto !important;
            }
            #u_content_image_1 .v-src-max-width {
              max-width: 65% !important;
            }
            #u_content_heading_2 .v-color {
              color: #fc653c !important;
            }
            #u_content_heading_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_text_2 .v-container-padding-padding {
              padding: 0px 20px 20px !important;
            }
            #u_content_text_2 .v-text-align {
              text-align: center !important;
            }
            #u_content_button_1 .v-button-colors {
              color: #ffffff !important;
              background-color: #000000 !important;
            }
            #u_content_button_1 .v-button-colors:hover {
              color: #ffffff !important;
              background-color: #3aaee0 !important;
            }
            #u_content_button_1 .v-size-width {
              width: 50% !important;
            }
            #u_column_11 .v-col-background-color {
              background-color: #fc653c !important;
            }
            #u_content_social_1 .v-container-padding-padding {
              padding: 17px !important;
            }
          }
        </style>
    
        <!--[if !mso]><!-->
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <!--<![endif]-->
      </head>
    
      <body
        class="clean-body u_body"
        style="
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          background-color: #ecf0f1;
          color: #000000;
        "
      >
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table
          id="u_body"
          style="
            border-collapse: collapse;
            table-layout: fixed;
            border-spacing: 0;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            vertical-align: top;
            min-width: 320px;
            margin: 0 auto;
            background-color: #ecf0f1;
            width: 100%;
          "
          cellpadding="0"
          cellspacing="0"
        >
          <tbody>
            <tr style="vertical-align: top">
              <td
                style="
                  word-break: break-word;
                  border-collapse: collapse !important;
                  vertical-align: top;
                "
              >
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ecf0f1;"><![endif]-->
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_image_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 50px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <table
                                      width="100%"
                                      cellpadding="0"
                                      cellspacing="0"
                                      border="0"
                                    >
                                      <tr>
                                        <td
                                          class="v-text-align"
                                          style="
                                            padding-right: 0px;
                                            padding-left: 0px;
                                          "
                                          align="center"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304265085.png"
                                            alt="email icon"
                                            title="email icon"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 33%;
                                              max-width: 191.4px;
                                            "
                                            width="191.4"
                                            class="v-src-width v-src-max-width"
                                          />
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        color: #fc653c;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 22px;
                                        font-weight: 400;
                                      "
                                    >
                                      "Thank you!"
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_heading_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 35px 30px 0px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: left;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      <strong> Hello  ${emailAddress}!</strong>
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_text_2"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 0px 30px 20px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        line-height: 170%;
                                        text-align: left;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%">
                                     

                                      Welcome to our IT Services Newsletter! 
                                      
                                      We are thrilled to have you on board as a subscriber, and we look forward to keeping you informed about the latest trends and advancements in web app marketing and more.
                                      
                                      
                                      As a subscriber, you can expect to receive regular updates directly in your inbox. We will share industry news, strategies for effective web app marketing, case studies, and success stories that will inspire and guide you on your digital journey.
                                      
                                      
                                      We encourage you to actively engage with our content and ask questions. Your feedback is invaluable to us, and we are here to support you every step of the way. Feel free to share your own experiences and insights with our community, as we believe in the power of collaboration and knowledge-sharing.
                                      
                                      To ensure that you never miss an issue, please add our email address info@verticalsols.com  to your contact list or mark our emails as "not spam." This will help you receive our updates seamlessly and stay connected.
                                      
                                      Thank you for joining our Community. 
                                      
                                      </p>
                                      <p style="line-height: 170%"> </p>
                                      <p style="line-height: 170%"> </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ecf0f1;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ecf0f1;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="200" class="v-col-background-color" style="background-color: #ffffff;width: 200px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: #ffffff;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ffffff;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ffffff;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 25px 10px 5px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <h1
                                      class="v-color v-text-align"
                                      style="
                                        margin: 0px;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                        font-family: 'Rubik', sans-serif;
                                        font-size: 18px;
                                        font-weight: 400;
                                      "
                                    >
                                      Need Help? <br />Our Dedicated Support Team is
                                      Here for You!
                                    </h1>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              id="u_content_button_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 30px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <!--[if mso
                                      ]><style>
                                        .v-button {
                                          background: transparent !important;
                                        }
                                      </style><!
                                    [endif]-->
                                    <div class="v-text-align" align="center">
                                      <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.unlayer.com" style="height:37px; v-text-anchor:middle; width:174px;" arcsize="11%"  stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:'Rubik',sans-serif;"><![endif]-->
                                      <a
                                        href="https://www.verticalsols.com/contact"
                                        target="_blank"
                                        class="v-button v-size-width v-button-colors"
                                        style="
                                          box-sizing: border-box;
                                          display: inline-block;
                                          font-family: 'Rubik', sans-serif;
                                          text-decoration: none;
                                          -webkit-text-size-adjust: none;
                                          text-align: center;
                                          color: #ffffff;
                                          background-color: #000000;
                                          border-radius: 4px;
                                          -webkit-border-radius: 4px;
                                          -moz-border-radius: 4px;
                                          width: 30%;
                                          max-width: 100%;
                                          overflow-wrap: break-word;
                                          word-break: break-word;
                                          word-wrap: break-word;
                                          mso-border-alt: none;
                                          font-size: 14px;
                                        "
                                      >
                                        <span
                                          style="
                                            display: block;
                                            padding: 10px 20px;
                                            line-height: 120%;
                                          "
                                          ><span style="line-height: 16.8px"
                                            >Contact Us</span
                                          ></span
                                        >
                                      </a>
                                      <!--[if mso]></center></v:roundrect><![endif]-->
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <div
                  class="u-row-container"
                  style="padding: 0px; background-color: #ffffff"
                >
                  <div
                    class="u-row"
                    style="
                      margin: 0 auto;
                      min-width: 320px;
                      max-width: 600px;
                      overflow-wrap: break-word;
                      word-wrap: break-word;
                      word-break: break-word;
                      background-color: transparent;
                    "
                  >
                    <div
                      style="
                        border-collapse: collapse;
                        display: table;
                        width: 100%;
                        height: 100%;
                        background-color: transparent;
                      "
                    >
                      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
    
                      <!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-background-color" style="background-color: #ecf0f1;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                      <div
                        id="u_column_11"
                        class="u-col u-col-100"
                        style="
                          max-width: 320px;
                          min-width: 600px;
                          display: table-cell;
                          vertical-align: top;
                        "
                      >
                        <div
                          class="v-col-background-color"
                          style="
                            background-color: #ecf0f1;
                            height: 100%;
                            width: 100% !important;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        >
                          <!--[if (!mso)&(!IE)]><!--><div
                            style="
                              box-sizing: border-box;
                              height: 100%;
                              padding: 0px;
                              border-top: 0px solid transparent;
                              border-left: 0px solid transparent;
                              border-right: 0px solid transparent;
                              border-bottom: 0px solid transparent;
                              border-radius: 0px;
                              -webkit-border-radius: 0px;
                              -moz-border-radius: 0px;
                            "
                          ><!--<![endif]-->
                            <table
                              id="u_content_social_1"
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 30px 10px 10px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div align="center">
                                      <div style="display: table; max-width: 187px">
                                        <!--[if (mso)|(IE)]><table width="187" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:187px;"><tr><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.facebook.com/verticalsols"
                                                  title="Facebook"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304165450.png"
                                                    alt="Facebook"
                                                    title="Facebook"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://twitter.com/VerticalSols"
                                                  title="Twitter"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304294935.png"
                                                    alt="Twitter"
                                                    title="Twitter"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 15px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 15px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://instagram.com/verticalsolspvt?igshid=NTc4MTIwNjQ2YQ=="
                                                  title="Instagram"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304234460.png"
                                                    alt="Instagram"
                                                    title="Instagram"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                        <table
                                          align="left"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          width="32"
                                          height="32"
                                          style="
                                            width: 32px !important;
                                            height: 32px !important;
                                            display: inline-block;
                                            border-collapse: collapse;
                                            table-layout: fixed;
                                            border-spacing: 0;
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            vertical-align: top;
                                            margin-right: 0px;
                                          "
                                        >
                                          <tbody>
                                            <tr style="vertical-align: top">
                                              <td
                                                align="left"
                                                valign="middle"
                                                style="
                                                  word-break: break-word;
                                                  border-collapse: collapse !important;
                                                  vertical-align: top;
                                                "
                                              >
                                                <a
                                                  href="https://www.youtube.com/@verticalsols"
                                                  title="YouTube"
                                                  target="_blank"
                                                >
                                                  <img
                                                    src="https://verticalsols-image.s3.ap-south-1.amazonaws.com/1684304319664.png"
                                                    alt="YouTube"
                                                    title="YouTube"
                                                    width="32"
                                                    style="
                                                      outline: none;
                                                      text-decoration: none;
                                                      -ms-interpolation-mode: bicubic;
                                                      clear: both;
                                                      display: block !important;
                                                      border: none;
                                                      height: auto;
                                                      float: none;
                                                      max-width: 32px !important;
                                                    "
                                                  />
                                                </a>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                        <!--[if (mso)|(IE)]></td><![endif]-->
    
                                        <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <table
                              style="font-family: 'Rubik', sans-serif"
                              role="presentation"
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              border="0"
                            >
                              <tbody>
                                <tr>
                                  <td
                                    class="v-container-padding-padding"
                                    style="
                                      overflow-wrap: break-word;
                                      word-break: break-word;
                                      padding: 10px 10px 40px;
                                      font-family: 'Rubik', sans-serif;
                                    "
                                    align="left"
                                  >
                                    <div
                                      class="v-color v-text-align"
                                      style="
                                        color: #ffffff;
                                        line-height: 140%;
                                        text-align: center;
                                        word-wrap: break-word;
                                      "
                                    >
                                      <p style="line-height: 140%">
                                        <span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >This email was intended for (Person Id
                                          Name), because you signed up for
                                          verticalsols | Unsubscribe | The links in
                                          this email will always direct to
                                          https://verticalsols.com. Learn about
                                          email security and online safety. </span
                                        ><br /><span
                                          style="
                                            font-family: 'andale mono', times;
                                            line-height: 19.6px;
                                            color: #000000;
                                          "
                                          >© Verticalsols Pvt Ltd. 2023</span
                                        >
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
    
                            <!--[if (!mso)&(!IE)]><!-->
                          </div>
                          <!--<![endif]-->
                        </div>
                      </div>
                      <!--[if (mso)|(IE)]></td><![endif]-->
                      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                    </div>
                  </div>
                </div>
    
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
    </html>
    `,
  };
  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};
export {
  welcomeEmail,
  receivedEmail,
  getQuoteEmail,
  getQoutereceivedEmail,
  newsLetterEmail,
  productPricingwelcomeEmail,
  productPricingreceivedEmail,
  realEstatereceivedEmail,
};
