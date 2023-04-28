import dotenv from "dotenv";
dotenv.config();
import sgMail from "@sendgrid/mail";

//import client from '@sendgrid/client'
//client.setApiKey('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')
sgMail.setApiKey(
  "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"
);

const welcomeEmail = async (email) => {
  const msg = {
    to: email,
    from: "info@verticalsols.com",
    subject: "Welcome",
    text: `Your query recieved at vertical souls`,
    html: `<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		.menu_block.desktop_hide .menu-links span {
			mso-hide: all;
		}

		@media (max-width:700px) {

			.desktop_hide table.icons-inner,
			.social_block.desktop_hide .social-table {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.fullMobileWidth,
			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links {
				display: none !important;
				padding: 5px 0;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
				display: none !important;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-links,
			.menu-checkbox[type=checkbox]~.menu-trigger {
				display: block !important;
				max-width: none !important;
				max-height: none !important;
				font-size: inherit !important;
			}

			.menu-checkbox[type=checkbox]~.menu-links>a,
			.menu-checkbox[type=checkbox]~.menu-links>span.label {
				display: block !important;
				text-align: center;
			}

			.menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
				display: block !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}

			.reverse {
				display: table;
				width: 100%;
			}

			.reverse .column.first {
				display: table-footer-group !important;
			}

			.reverse .column.last {
				display: table-header-group !important;
			}

			.row-7 td.column.first .border,
			.row-7 td.column.last .border {
				padding: 5px 0;
				border-top: 0;
				border-right: 0px;
				border-bottom: 0;
				border-left: 0;
			}
		}

		#memu-r13c0m15:checked~.menu-links {
			background-color: #ffffff !important;
		}

		#memu-r13c0m15:checked~.menu-links a,
		#memu-r13c0m15:checked~.menu-links span {
			color: #0a0908 !important;
		}
	</style>
</head>
<body style="background-color: #0a0908; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0a0908;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #e1d8cf; background-image: url('images/stars_2.png'); background-position: center top; background-repeat: no-repeat;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;padding-top:15px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #0a0908; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 15px; font-weight: normal; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">#006 / May 31st 2021</h1>
</td>
</tr>
</table>
<div class="spacer_block block-2" style="height:30px;line-height:30px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center;">
<table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Company Logo" class="icon" height="64" src="images/logo_memorial_day.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="95"/></td>
</tr>
</table>
</td>
</tr>
</table>
<div class="spacer_block block-4" style="height:30px;line-height:30px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #0a0908; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 23px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;">Remembering That Our Freedom Was Not Free</h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:15px;width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Memorial Day " class="big" src="images/MEMORIAL_DAY_Header_1.png" style="display: block; height: auto; border: 0; width: 680px; max-width: 100%;" title="Memorial Day " width="680"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0a0908; background-image: url('images/Flag_bg_4.png'); background-position: center top; background-repeat: no-repeat;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 38px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Freedom</strong><br/></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Guy Jumping" class="fullMobileWidth" src="images/Freedom_1.png" style="display: block; height: auto; border: 0; width: 510px; max-width: 100%;" title="Guy Jumping" width="510"/></div>
</td>
</tr>
</table>
<div class="spacer_block block-5" style="height:50px;line-height:50px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 26px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Heroism</strong><br/></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="spacer_block block-1" style="height:35px;line-height:35px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 26px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: center; margin-top: 0; margin-bottom: 0;"><strong>Honor</strong><br/></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 18px; color: #dcdcdc; line-height: 1.5;">
<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 21px;"><span style="font-size:14px;">Lorem ipsum dolor sit amet, <a href="http://www.example.com" rel="noopener" style="text-decoration: underline; color: #dcdcdc;" target="_blank">consectetuer adipiscing elit</a></span></p>
</div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0a0908; background-image: url('images/love.png'); background-position: center top; background-repeat: no-repeat;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr class="reverse">
<td class="column column-1 first" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="border">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<div class="spacer_block block-2 mobile_hide" style="height:90px;line-height:90px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 38px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>LOVE</strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
<div align="left" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:46px;width:175px;v-text-anchor:middle;" arcsize="131%" strokeweight="1.5pt" strokecolor="#E1D8CF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#e1d8cf; font-family:Georgia, serif; font-size:16px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#e1d8cf;background-color:transparent;border-radius:60px;width:auto;border-top:2px solid #E1D8CF;font-weight:undefined;border-right:2px solid #E1D8CF;border-bottom:2px solid #E1D8CF;border-left:2px solid #E1D8CF;padding-top:5px;padding-bottom:5px;font-family:Georgia, Times, Times New Roman, serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:45px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Read More</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
</div>
</td>
<td class="column column-2 last" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="border">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:5px;padding-right:5px;width:100%;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Boy With American Flag" src="images/Love_main.png" style="display: block; height: auto; border: 0; width: 330px; max-width: 100%;" title="Boy With American Flag" width="330"/></div>
</td>
</tr>
</table>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 38px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>MEMORIES</strong><br/></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:20px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </span></p>
</div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-4" style="height:20px;line-height:20px;font-size:1px;"> </div>
<div class="spacer_block block-5" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Girl with American Flag" class="big" src="images/girl_flag_1.png" style="display: block; height: auto; border: 0; width: 660px; max-width: 100%;" title="Girl with American Flag" width="660"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="War Heroes Cemetery" class="fullMobileWidth" src="images/pic2.png" style="display: block; height: auto; border: 0; width: 320px; max-width: 100%;" title="War Heroes Cemetery" width="320"/></div>
</td>
</tr>
</table>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="American Flag" class="fullMobileWidth" src="images/pic1.png" style="display: block; height: auto; border: 0; width: 320px; max-width: 100%;" title="American Flag" width="320"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 10px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Child Laughing" class="big" src="images/girl_father_smiling.png" style="display: block; height: auto; border: 0; width: 660px; max-width: 100%;" title="Child Laughing" width="660"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-12" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1 mobile_hide" style="height:50px;line-height:50px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0a0908; background-image: url('images/equality_bg.png'); background-position: center top; background-repeat: no-repeat;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-left:5px;padding-right:5px;width:100%;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Girl with white background" src="images/Equality.png" style="display: block; height: auto; border: 0; width: 330px; max-width: 100%;" title="Girl with white background" width="330"/></div>
</td>
</tr>
</table>
<div class="spacer_block block-3 mobile_hide" style="height:20px;line-height:20px;font-size:1px;"> </div>
</td>
<td class="column column-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="50%">
<div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;"> </div>
<div class="spacer_block block-2 mobile_hide" style="height:90px;line-height:90px;font-size:1px;"> </div>
<div class="spacer_block block-3 mobile_hide" style="height:90px;line-height:90px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 38px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Equality</strong></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="button_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
<div align="left" class="alignment"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.example.com" style="height:46px;width:175px;v-text-anchor:middle;" arcsize="131%" strokeweight="1.5pt" strokecolor="#E1D8CF" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#e1d8cf; font-family:Georgia, serif; font-size:16px"><![endif]--><a href="www.example.com" style="text-decoration:none;display:inline-block;color:#e1d8cf;background-color:transparent;border-radius:60px;width:auto;border-top:2px solid #E1D8CF;font-weight:undefined;border-right:2px solid #E1D8CF;border-bottom:2px solid #E1D8CF;border-left:2px solid #E1D8CF;padding-top:5px;padding-bottom:5px;font-family:Georgia, Times, Times New Roman, serif;font-size:16px;text-align:center;mso-border-alt:none;word-break:keep-all;" target="_blank"><span style="padding-left:45px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;">Read More</span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
</td>
</tr>
</table>
<div class="spacer_block block-7" style="height:35px;line-height:35px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-14" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0a0908; background-image: url('images/heroes_1.png'); background-position: center top; background-repeat: no-repeat;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<div class="spacer_block block-1 mobile_hide" style="height:50px;line-height:50px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="image_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" class="alignment" style="line-height:10px"><img alt="Our Hero" class="fullMobileWidth" src="images/old_photo_2_1.png" style="display: block; height: auto; border: 0; width: 680px; max-width: 100%;" title="Our Hero" width="680"/></div>
</td>
</tr>
</table>
<div class="spacer_block block-3" style="height:25px;line-height:25px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block block-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;width:100%;">
<h1 style="margin: 0; color: #ffffff; direction: ltr; font-family: Georgia, Times, Times New Roman, serif; font-size: 38px; font-weight: normal; letter-spacing: normal; line-height: 150%; text-align: left; margin-top: 0; margin-bottom: 0;"><strong>Our Heroes</strong><br/></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 24px; color: #dcdcdc; line-height: 2;">
<ol style="font-size: 14px;">
<li><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer </span></li>
<li>
<p style="margin: 0; mso-line-height-alt: 28px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo </p>
</li>
<li>
<p style="margin: 0; mso-line-height-alt: 28px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
</li>
<li>
<p style="margin: 0; mso-line-height-alt: 28px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
</li>
</ol>
</div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-7" style="height:20px;line-height:20px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-10" style="height:40px;line-height:40px;font-size:1px;"> </div>
<table border="0" cellpadding="10" cellspacing="0" class="divider_block block-11" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 2px solid #E1D8CF;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<div class="spacer_block block-12" style="height:10px;line-height:10px;font-size:1px;"> </div>
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-13" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center;">
<table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 15px; padding-left: 5px; padding-right: 5px;"><img align="center" alt="Company Logo" class="icon" height="64" src="images/logo_memorial.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="95"/></td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block block-14" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
<div style="font-family: sans-serif">
<div class="" style="font-size: 12px; font-family: Georgia, Times, Times New Roman, serif; mso-line-height-alt: 21.6px; color: #dcdcdc; line-height: 1.8;">
<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 28.8px;"><span style="font-size:16px;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,</span></p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="social_block block-15" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad">
<div align="center" class="alignment">
<table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="184px">
<tr>
<td style="padding:0 7px 0 7px;"><a href="https://www.facebook.com/" target="_blank"><img alt="Facebook" height="32" src="images/facebook2x.png" style="display: block; height: auto; border: 0;" title="facebook" width="32"/></a></td>
<td style="padding:0 7px 0 7px;"><a href="https://www.twitter.com/" target="_blank"><img alt="Twitter" height="32" src="images/twitter2x.png" style="display: block; height: auto; border: 0;" title="twitter" width="32"/></a></td>
<td style="padding:0 7px 0 7px;"><a href="https://www.linkedin.com/" target="_blank"><img alt="Linkedin" height="32" src="images/linkedin2x.png" style="display: block; height: auto; border: 0;" title="linkedin" width="32"/></a></td>
<td style="padding:0 7px 0 7px;"><a href="https://www.instagram.com/" target="_blank"><img alt="Instagram" height="32" src="images/instagram2x.png" style="display: block; height: auto; border: 0;" title="instagram" width="32"/></a></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="menu_block block-16" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="color:#ffffff;font-family:inherit;font-size:14px;letter-spacing:1px;text-align:center;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="alignment" style="text-align:center;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r13c0m15" style="display:none !important;max-height:0;visibility:hidden;" type="checkbox"/><!--<![endif]-->
<div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r13c0m15" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: center; text-align: center; color: #0a0908; text-decoration: none; background-color: #ffffff; border-radius: 0;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:36px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
<div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:center;"><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:20px;padding-bottom:10px;padding-left:20px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:15px;padding-bottom:10px;padding-left:20px;padding-right:20px;display:inline-block;color:#ffffff;font-family:Georgia, Times, Times New Roman, serif;font-size:14px;text-decoration:none;letter-spacing:1px;" target="_self">Info</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:20px;padding-bottom:10px;padding-left:20px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:15px;padding-bottom:10px;padding-left:20px;padding-right:20px;display:inline-block;color:#ffffff;font-family:Georgia, Times, Times New Roman, serif;font-size:14px;text-decoration:none;letter-spacing:1px;" target="_self">Blogs</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:20px;padding-bottom:10px;padding-left:20px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:15px;padding-bottom:10px;padding-left:20px;padding-right:20px;display:inline-block;color:#ffffff;font-family:Georgia, Times, Times New Roman, serif;font-size:14px;text-decoration:none;letter-spacing:1px;" target="_self">Links</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:15px;padding-right:20px;padding-bottom:10px;padding-left:20px"><![endif]--><a href="www.example.com" style="mso-hide:false;padding-top:15px;padding-bottom:10px;padding-left:20px;padding-right:20px;display:inline-block;color:#ffffff;font-family:Georgia, Times, Times New Roman, serif;font-size:14px;text-decoration:none;letter-spacing:1px;" target="_self">Unsubscribe</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<div class="spacer_block block-17" style="height:25px;line-height:25px;font-size:1px;"> </div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-15" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px;" width="680">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
<table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
<!--[if !vml]><!-->
<table cellpadding="0" cellspacing="0" class="icons-inner" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"><!--<![endif]-->
<tr>
<td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="https://www.designedwithbee.com/" style="text-decoration: none;" target="_blank"><img align="center" alt="Designed with BEE" class="icon" height="32" src="images/bee.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="34"/></a></td>
<td style="font-family: Georgia, Times, Times New Roman, serif; font-size: 15px; color: #9d9d9d; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="https://www.designedwithbee.com/" style="color: #9d9d9d; text-decoration: none;" target="_blank">Designed with BEE</a></td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>`,
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

export { welcomeEmail };
