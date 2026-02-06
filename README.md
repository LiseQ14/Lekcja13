# 📝 Walidacja formularza – jQuery Validate

## 📌 Opis projektu
Projekt przedstawia **formularz rejestracyjny** z walidacją danych po stronie klienta, wykonaną przy użyciu biblioteki **jQuery Validate**.  
Walidacja zapobiega wysłaniu formularza, jeśli dane użytkownika są niepoprawne.

---

## ✅ Zastosowane reguły walidacji

### 👤 Imię
- `required` – pole jest wymagane  
- `minlength: 2` – minimum 2 znaki  

---

### 📧 Email
- `required` – pole jest wymagane  
- `email` – poprawny format adresu email  

---

### 🧑 Nazwa użytkownika
- `required` – pole jest wymagane  
- `minlength: 2` – minimum 2 znaki  
- `remote` – sprawdzenie, czy nazwa użytkownika nie jest już zajęta  
  - walidacja odbywa się na podstawie pliku `usernames.json`
  - jeśli nazwa istnieje → wyświetlany jest komunikat o błędzie  

---

### 🎂 Wiek
- `required` – pole jest wymagane  
- `number` – tylko wartości liczbowe  
- `min: 18` – użytkownik musi mieć co najmniej 18 lat  

---

### 🔒 Hasło
- `required` – pole jest wymagane  
- `minlength: 6` – minimum 6 znaków  

---

### 🔁 Potwierdzenie hasła
- `required` – pole jest wymagane  
- `equalTo` – musi być identyczne jak hasło  

---

## 🛠️ Technologie
- HTML  
- CSS  
- JavaScript  
- jQuery  
- jQuery Validate  

---

## ⚠️ Uwagi
Reguła `remote` (sprawdzanie zajętości nazwy użytkownika) wymaga uruchomienia projektu na **lokalnym serwerze (`http://`)**.  
Przykład: rozszerzenie **Live Server** w Visual Studio Code.

---

## 📂 Autor
Projekt wykonany w ramach zadania z walidacji formularzy.
