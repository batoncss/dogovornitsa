from django.shortcuts import render, redirect

from Dogovornitsa.apps.contracts.forms import ParticipantForm
from Dogovornitsa.apps.contracts.models import Participant


def participants(request):
    if request.method == 'POST':
        form = ParticipantForm(request.POST)
        if form.is_valid():
            form.save()  # Сохраняем новую запись
            return redirect('participants')  # Перезагрузка страницы
    else:
        form = ParticipantForm()
    all_participants = Participant.objects.all()
    return render(request, "pages/contracts/participants.html", {"participants": all_participants, 'form': form})
