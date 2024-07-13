// function generatePDF() {
// 	var content = document.getElementById('content')

// 	html2canvas(content, {
// 		onrendered: function (canvas) {
// 			var imgData = canvas.toDataURL('image/png')
// 			var pdf = new jsPDF('p', 'mm', 'a4')
// 			var pageHeight = 295 // A4 page height in mm
// 			var imgWidth = 210 // A4 page width in mm
// 			var imgHeight = (canvas.height * imgWidth) / canvas.width
// 			var heightLeft = imgHeight
// 			var position = 0

// 			pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
// 			heightLeft -= pageHeight

// 			while (heightLeft >= 0) {
// 				position = heightLeft - imgHeight
// 				pdf.addPage()
// 				pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
// 				heightLeft -= pageHeight
// 			}
// 			pdf.save('page.pdf')
// 		},
// 	})
// }
// let downloadBtn = document.querySelector('.down')
// downloadBtn.addEventListener('click', generatePDF)

