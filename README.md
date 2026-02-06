Walidacja formularza – jQuery Validate
Opis projektu

Projekt przedstawia formularz rejestracyjny z walidacją po stronie klienta, wykonaną przy użyciu biblioteki jQuery Validate.
Celem projektu jest sprawdzenie poprawności danych wprowadzanych przez użytkownika przed wysłaniem formularza.

Zastosowane reguły walidacji
1. Imię

required – pole jest wymagane

minlength: 2 – minimum 2 znaki

2. Email

required – pole jest wymagane

email – poprawny format adresu email

3. Nazwa użytkownika

required – pole jest wymagane

minlength: 2 – minimum 2 znaki

remote – sprawdzenie, czy nazwa użytkownika nie jest już zajęta

walidacja odbywa się na podstawie pliku usernames.json

jeśli nazwa istnieje → formularz zgłasza błąd

4. Wiek

required – pole jest wymagane

number – tylko wartości liczbowe

min: 18 – użytkownik musi mieć co najmniej 18 lat

5. Hasło

required – pole jest wymagane

minlength: 6 – minimum 6 znaków

6. Potwierdzenie hasła

required – pole jest wymagane

equalTo – musi być identyczne jak hasło

Technologie

HTML

CSS

JavaScript

jQuery

jQuery Validate

Uwagi

Do poprawnego działania walidacji z użyciem reguły remote projekt musi być uruchomiony na lokalnym serwerze (http://), np. za pomocą Live Server w Visual Studio Code.
