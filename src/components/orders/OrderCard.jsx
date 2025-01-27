import { ArrowForwardIos, Download, Star, StarBorderSharp, TaskAlt } from "@mui/icons-material"
import { useState } from "react"
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useMediaQuery } from "@mui/material";
import Dimensions from "../others/Dimensions";

const OrderCard = () => {

	const [open, setOpen] = useState(false);
	const [rating, setRating] = useState(0);
	const medium = Dimensions.medium();

	const handleOpen = () => {
		open ? setOpen(false) : setOpen(true)
	}

	const generateInvoicePDF = () => {
		const doc = new jsPDF();

		// Page dimensions
		const pageWidth = doc.internal.pageSize.getWidth();
		const pageHeight = doc.internal.pageSize.getHeight();

		// Header section
		doc.setFillColor(0, 102, 128); // Teal background
		doc.rect(0, 0, pageWidth, 40, "F"); // Top bar
		doc.setFontSize(16);
		doc.setTextColor(255, 255, 255);
		doc.text("HASINI ENTERPRISES", 10, 15);
		doc.setFontSize(10);
		doc.text("<Address>\n+91 1234567890 Example@gmail.com", 10, 25);

		// Logo placeholder (replace with an image if available)
		// doc.setFillColor(80); // Grey circle
		// doc.circle(pageWidth - 25, 20, 15, "F");
		// doc.setFontSize(8);
		// doc.text("/images/icons/logo.png", pageWidth - 30, 22);

		const imgPath = "/images/icons/logo.png";
		const imgWidth = 25; // Adjust logo width
		const imgHeight = 25; // Adjust logo height
		const imgX = pageWidth - 40; // Position logo on the right
		const imgY = 10; // Position logo at the top

		const img = new Image();
		img.src = imgPath;
		img.onload = () => {
			doc.addImage(img, "PNG", imgX, imgY, imgWidth, imgHeight);

			// Invoice Title
			doc.setFontSize(14);
			doc.setTextColor(0, 0, 0);
			doc.text("INVOICE", pageWidth / 2 - 15, 50);

			// Invoice Info
			doc.setFontSize(10);
			doc.text("Invoice No. #76543", 10, 60);
			doc.text("<Payment terms (due on receipt, due in X days)>", 10, 65);

			// Date
			doc.text("DATE", pageWidth - 40, 60);
			doc.text("8/8/24", pageWidth - 40, 65);

			// Bill To & Ship To
			doc.setFontSize(12);
			doc.setTextColor(0, 0, 0);
			doc.text("BILL TO", 10, 80);
			doc.text("SHIP TO", pageWidth / 2, 80);

			doc.setFontSize(10);
			doc.setTextColor(0, 0, 0);
			doc.text("<Name>", 10, 85);
			doc.text("<Address>", 10, 90);
			doc.text("<Phone>", 10, 95);
			doc.text("<Email>", 10, 100);

			doc.text("Name / Dept", pageWidth / 2, 85);
			doc.text("<Client Company Name>", pageWidth / 2, 90);
			doc.text("<Address>", pageWidth / 2, 95);
			doc.text("<Phone>", pageWidth / 2, 100);

			// Table
			doc.autoTable({
				startY: 110,
				head: [["DESCRIPTION", "QTY", "UNIT PRICE", "TOTAL"]],
				body: [
					["Item 1", "1", "$5.00", "$5.00"],
					["Item 2", "1", "$7.00", "$7.00"],
					["Item 3", "1", "$6.00", "$6.00"],
				],
				headStyles: { fillColor: [0, 102, 128] },
				styles: { halign: "center" },
			});

			// Summary Section
			let finalY = doc.previousAutoTable.finalY + 10;
			doc.text("SUBTOTAL", pageWidth - 100, finalY);
			doc.text("$18.00", pageWidth - 20, finalY);

			finalY += 5;
			doc.text("DISCOUNT", pageWidth - 100, finalY);
			doc.text("$2.00", pageWidth - 20, finalY);

			/* finalY += 5;
			doc.text("SUBTOTAL LESS DISCOUNT", pageWidth - 100, finalY);
			doc.text("$16.00", pageWidth - 20, finalY);

			finalY += 5;
			doc.text("TAX RATE", pageWidth - 100, finalY);
			doc.text("8%", pageWidth - 20, finalY);

			finalY += 5;
			doc.text("TOTAL TAX", pageWidth - 100, finalY);
			doc.text("$1.28", pageWidth - 20, finalY); */

			finalY += 5;
			doc.text("SHIPPING/HANDLING", pageWidth - 100, finalY);
			doc.text("$2.99", pageWidth - 20, finalY);

			finalY += 10;
			doc.setFontSize(12);
			doc.setTextColor(0, 102, 128);
			doc.text("BALANCE DUE", pageWidth - 100, finalY);
			doc.setFillColor(0, 102, 128);
			doc.setTextColor(255, 255, 255);
			doc.rect(pageWidth - 60, finalY - 5, 40, 10, "F");
			doc.text("$20.27", pageWidth - 50, finalY + 2);

			// Footer
			doc.setFontSize(10);
			doc.setTextColor(0, 0, 0);
			doc.text(
				"Make all checks payable to HASINI ENTERPRISES. Or submit payment via Venmo: <venmo account> or Paypal: <paypal account>",
				10,
				pageHeight - 50,
				{ maxWidth: pageWidth - 10 }
			);
			doc.text("Client Signature X", 10, pageHeight - 30);

			doc.setFontSize(15);
			doc.setTextColor(0, 102, 128);
			doc.text("Thank you for your business!", pageWidth / 2 - 40, pageHeight - 20);

			// Save PDF
			doc.save("invoice.pdf");
		};
	}

	return (
		<div>
			<div className="w-[100%] md:h-[130px] h-[20dvw] border-[1px] border-[rgba(0,0,0,0.5)] rounded-[8px] p-[5px] flex flex-row items-center justify-between">
				<div className="w-[15%] h-full border-[0px] border-[black] flex flex-row items-center justify-center">
					<img src="/images/item_details/a.jpg" className="h-full" />
				</div>
				<div className="w-[40%] h-[100%] border-r-[1px] border-[black] flex flex-col items-center justify-start md:gap-[10px] gap-[0dvw]">
					<p className="md:text-[130%] text-[3dvw] font-[500]">Dairy Melts, Chocolate Bar</p>
					<div className="w-auto h-auto flex flex-col items-center justify-start md:gap-[5px] gap-[0dvw]">
						<div className="flex flex-row items-center justify-between gap-[2px]">
							{
								Array.from(Array(rating).keys()).map((v, k) => {
									return <Star style={{ fontSize: medium ? "4dvw" : "100%", cursor: "pointer", }} onClick={() => setRating(k + 1)} />
								})
							}
							{
								Array.from(Array(5 - rating).keys()).map((v, k) => {
									return <StarBorderSharp style={{ fontSize: medium ? "4dvw" : "100%", cursor: "pointer", }} onClick={() => setRating(rating + k + 1)} />
								})
							}
						</div>
						<p className="md:text-[110%] text-[3dvw] opacity-[0.6] font-[300]">Rate Out Product</p>
					</div>
				</div>
				<div className="w-[40%] h-[100%] border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px] md:px-[10px] px-[1dvw] py-[5px]">
					<p className="md:text-[90%] text-[2dvw] opacity-[0.6] font-bold">Order Id: 00675123456789</p>
					<p className="text-[#FFAD33] md:text-[135%] text-[2.5dvw] font-bold">Delivered On Tue , 17 , Dec</p>
					<button className="flex flex-row items-center justify-between gap-[10px] px-[10px] md:py-[5px] py-[0.5dvw] m-auto hover:bg-[#91A2F561] rounded-[4px] border-[1px] border-[rgba(0,0,0,0.1)] md:text-[100%] text-[2.5dvw]"
						onClick={handleOpen}
						style={{ backgroundColor: open ? "#91A2F561" : "transparent", }}
					>
						More details <ArrowForwardIos style={{ transform: open ? "rotateZ(-90deg) scale(0.9)" : "rotateZ(90deg) scale(0.9)", fontSize: medium ? "3dvw" : "100%" }} />
					</button>
				</div>
			</div>

			{open &&
				<div className="w-[100%] md:h-[270px] h-[40dvw] border-[1px] border-[rgba(0,0,0,0.5)] rounded-[8px] p-[5px] flex flex-row items-center justify-between mt-[10px]">
					<div className="w-[25%] h-full border-[0px] border-[black] flex flex-row items-center justify-center">
						<img src="/images/item_details/a.jpg" className="h-full" />
					</div>
					<div className="w-[30%] h-[100%] border-r-[1px] border-[black] flex flex-col items-start justify-center md:gap-[5px] gap-[0dvw]">
						<p className="md:text-[90%] text-[2dvw] opacity-[0.6] font-bold">Order Id: 00675123456789</p>
						<p className="md:text-[130%] text-[3dvw] font-[500]">Dairy Melts, Chocolate Bar</p>
						<p className="font-bold md:text-[170%] text-[4dvw]">&#8377; 165</p>
						<div className="w-auto h-auto flex flex-col items-center justify-start gap-[5px]">
							<div className="flex flex-row items-center justify-between gap-[2px]">
								{
									Array.from(Array(rating).keys()).map((v, k) => {
										return <Star style={{ fontSize: medium ? "4dvw" : "160%", cursor: "pointer", }} onClick={() => setRating(k + 1)} />
									})
								}
								{
									Array.from(Array(5 - rating).keys()).map((v, k) => {
										return <StarBorderSharp style={{ fontSize: medium ? "4dvw" : "160%", cursor: "pointer", }} onClick={() => setRating(rating + k + 1)} />
									})
								}
							</div>
							<p className="md:text-[110%] text-[3dvw] opacity-[0.6] font-[300]">Rate Out Product</p>
							<button
								className="bg-[#133DF6] text-[white] md:px-[10px] px-[1dvw] md:text-[100%] text-[2dvw] py-[5px] rounded-[5px]"
								onClick={generateInvoicePDF}
							>
								<Download style={{ fontSize: medium ? "3dvw" : "100%" }} />
								<span className="font-[500]"> Download Invoice</span>
							</button>
						</div>
					</div>
					<div className="w-[40%] h-[100%] border-[0px] border-[black] flex flex-col items-start justify-start gap-[5px] md:px-[10px] px-[0.5dvw] md:py-[5px] py-[0dvw]">

						<p className=" text-[#FFAD33] font-bold md:text-[135%] text-[4dvw] mx-auto">Order Status</p>
						<div className="w-auto h-auto flex flex-col items-start justify-start md:gap-[10px] gap-[1dvw] relative">
							<div className="absolute h-[100%] border-[#FFAD33] border-l-[2px] top-[0px] bottom-0 md:left-[13px] left-[2dvw]"></div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: true ? "#FFAD33" : "white", fontSize: medium ? "3.5dvw" : "100%", }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px] md:text-[100%] text-[2dvw]">
									<p>Order Confirmed</p>
									<p>- Sun Dec 15</p>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: true ? "#FFAD33" : "white", fontSize: medium ? "3.5dvw" : "100%", }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px] md:text-[100%] text-[2dvw]">
									<p>Order Dispatched</p>
									<p>- Mon Dec 16</p>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: false ? "#FFAD33" : "white", fontSize: medium ? "3.5dvw" : "100%", }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px] md:text-[100%] text-[2dvw]">
									<p>Order Will be Shipped by</p>
									<p>- Tue Dec 17</p>
								</div>
							</div>
							<div className="w-auto h-auto flex flex-row items-start justify-start gap-[15px] font-[500] text-[85%] border-[0px] border-[black]">
								<TaskAlt className="scale-[90%] rounded-[50%]" style={{ backgroundColor: false ? "#FFAD33" : "white", fontSize: medium ? "3.5dvw" : "100%", }} />
								<div className="w-auto h-auto border-[0px] border-[black] flex flex-col items-start justify-start gap-[0px] md:text-[100%] text-[2dvw]">
									<p>Order Will be Delivered by </p>
									<p>- Wed Dec 18</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default OrderCard