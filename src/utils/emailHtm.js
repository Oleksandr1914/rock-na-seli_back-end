const emailHtml = (
  bandName,
  email,
  contactPersonName,
  phone,
  address,
  styleGroup,
  numberOfBandMembers,
  listOfInstrumentalBend,
  linksSocialNetworkPage,
  linksToBandVideo
) => {
  return `
  <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Demystifying Email Design</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <style>
  .table {
	width: 100%;
	margin-bottom: 20px;
	border: 1px solid #dddddd;
	border-collapse: collapse; 
}
.table th {
	font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
}
.table td {
	border: 1px solid #dddddd;
	padding: 5px;
}
</style>
</head>
<body>
<h1 class="title">Заявка на реєстрацію гурту <b>${bandName}</b></h1>
<table class="table">
	<thead>
		<tr>
			<th>Ключові поля</th>
			<th>Відповідь групи</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Назва гурту</td>
			<td>${bandName}</td>
		</tr>
		<tr>
			<td>Email</td>
			<td>${email}</td>
		</tr>
		<tr>
			<td>Контактна особа</td>
			<td>${contactPersonName}</td>
		</tr>
		<tr>
			<td>Номер телефону</td>
			<td>${phone}</td>
		</tr>
		<tr>
			<td>Населений пункт</td>
			<td>${address}</td>
		</tr>
		<tr>
			<td>Стиль у якому грає гурт</td>
			<td>${styleGroup}</td>
		</tr>
		<tr>
			<td>Кількість учасників гурту</td>
			<td>${numberOfBandMembers}</td>
		</tr>
		<tr>
			<td>Коротка інформація про гурт</td>
			<td>${listOfInstrumentalBend}</td>
		</tr>
		<tr>
			<td>Посилання на сторінки соціальних мереж</td>
			<td>${linksSocialNetworkPage}</td>
		</tr>
		<tr>
			<td>Посилання на відеозаписи гурту</td>
			<td>${linksToBandVideo}</td>
		</tr>
	</tbody>
</table></body>
</html>
  
  `;
};

module.exports = {
  emailHtml,
};
