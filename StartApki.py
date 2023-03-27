import tkinter
import customtkinter

customtkinter.set_appearance_mode("dark")  # system (default), light, dark
customtkinter.set_default_color_theme("blue")  # blue (default), dark-blue, green

app = customtkinter.CTk()
app.geometry("1280x720")

def login():
    print("Test")

# Use CTkButton instead of tkinter Button
frame = customtkinter.CTkFrame(master=app)
frame.pack(pady=20, padx=60, fill="both", expand=True)

switch = customtkinter.CTkSwitch(master=app, text="Zmień jasność aplikacji")
switch.pack(pady=10, padx=10)

label = customtkinter.CTkLabel(master=frame, text="System logowania")
label.pack(pady=12, padx=10)

entry1 = customtkinter.CTkEntry(master=frame, placeholder_text="Nazwa użytkownika")
entry1.pack(pady=12, padx=10)

entry2 = customtkinter.CTkEntry(master=frame, placeholder_text="Hasło", show="*")
entry2.pack(pady=12, padx=10)

button = customtkinter.CTkButton(master=frame, text="Zaloguj się", command=login)
button.pack(pady=12, padx=10)

checkbox = customtkinter.CTkCheckBox(master=frame, text="Pamiętaj mnie")
checkbox.pack(pady=12, padx=10)

app.mainloop()
