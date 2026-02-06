$('#form').validate({
	rules: {
		imie: {
			required: true,
			minlength: 2,
		},
		email: {
			required: true,
			email: true,
		},
		nazwa: {
			required: true,
			minlength: 2,
			remote: {
				url: 'usernames.json',
				type: 'get',
				dataFilter: function (response) {
					const data = JSON.parse(response)
					const username = $("input[name='nazwa']").val()

					// username exists → INVALID
					if (data.usernames.includes(username)) {
						return false
					}

					// username free → VALID
					return true
				},
			},
		},
		wiek: {
			required: true,
			number: true,
			min: 18,
		},
		haslo: {
			required: true,
			minlength: 6,
		},
		potwierdzhaslo: {
			required: true,
			equalTo: '#i3',
		},
	},
	messages: {
		imie: {
			required: 'Wpisz imię!',
			minlength: 'Imię powinno zawierać minimum 2 znaki',
		},
		email: {
			required: 'Wpisz email!',
			email: 'Nieprawidłowy email',
		},
		nazwa: {
			required: 'Wpisz nazwę użytkownika',
			minlength: 'Minimum 2 znaki',
			remote: 'Ta nazwa użytkownika jest już zajęta',
		},
		wiek: {
			required: 'Wpisz swój wiek!',
			number: 'Wiek nie jest podany w cyfrach!',
			min: 'Musisz mieć conajmniej 18 lat!',
		},
		haslo: {
			required: 'Wpisz hasło!',
			minlength: 'Hasło powinno zawierać minimum 6 znaków',
		},
		potwierdzhaslo: {
			required: 'Potwierdź hasło',
			equalTo: 'Hasła nie są takie same!',
		},
	},
})
