from django.shortcuts import render
from .models import experiences
# Create your views here.

def home(request):
    experiences_queryset = experiences.objects.filter(type='experience')
    skills_queryset = experiences.objects.filter(type='skill')

    return render(request, "home.html", context={'experiences':experiences_queryset, 'skills': skills_queryset})