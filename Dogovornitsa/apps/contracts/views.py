from django.shortcuts import render, redirect, get_object_or_404

from Dogovornitsa.apps.contracts.forms import ParticipantForm
from Dogovornitsa.apps.contracts.models import Participant


def participants(request):
    form_is_invalid = False
    if request.method == 'POST':
        form = ParticipantForm(request.POST)
        if form.is_valid():
            form.save()  # Сохраняем новую запись
            return redirect('participants')  # Перезагрузка страницы
        else:
            form_is_invalid = True
    else:
        form = ParticipantForm()
    all_participants = Participant.objects.all()
    return render(request, "contracts/participants.html", {"participants": all_participants, 'form': form, "form_is_invalid": form_is_invalid })


def participants_delete(request, participant_id):
    participant = get_object_or_404(Participant, id=participant_id)
    participant.delete()
    return redirect('participants')  # Перезагрузка страницы