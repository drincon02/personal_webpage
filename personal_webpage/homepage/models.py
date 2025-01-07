from django.db import models

# Create your models here.
type_choices = [("experience", "Experience"), ("skill", "Skill")]
class experiences(models.Model):
    
    name = models.CharField(unique=True, max_length=50)
    type = models.CharField(choices=type_choices, max_length=50)
    image = models.ImageField()
    link = models.URLField(null=True, blank=True, max_length=50)
    date = models.DateField(null=True, blank=True)
    alternate_image =  models.ImageField()
    

    def __str__(self):
        return f"{self.name} - {self.type}"