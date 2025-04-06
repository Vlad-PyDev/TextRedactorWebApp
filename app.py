import eel

eel.init('web')

@eel.expose
def save_file(filename, content):
    try:
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        return "Файл сохранён."
    except Exception as e:
        return str(e)

eel.start('initial.html', size=(800,600))