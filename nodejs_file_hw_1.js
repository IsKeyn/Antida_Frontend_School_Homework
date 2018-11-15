function delete_space_from_file(file_name) {

		console.time('script_time');

	 	fs = require("fs");

	 	fs.readFile(file_name, "utf8", function(error, data) {

	 		if (error)
	 		{
				console.log(error);
	 		}
	 		else
	 		{
	 			data = data.replace(/ {1,}/g," ");

	 			fs.writeFile("converted_" + file_name, data, function() { console.log('Лишние пробелы успешно удалены'); });
	 		}
	 	});

	 	console.timeEnd('script_time');
}

delete_space_from_file("file.txt");