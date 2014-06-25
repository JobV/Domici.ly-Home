open terminal
ga naar de juiste folder met:

```
cd Domici
```


overzicht folders:

```
ls
```


zorg ervoor dat je in de master branch bent

```
git checkout master
```


als dit niet lukt, zijn er misschien nog on-opgeslagen bestanden. Je kan alles snel weggooien met:

```
git checkout .
```


haal de laatste code op:

```
git pull
```


open alle files met sublime text

```
sdf .
```


start de middleman server

```
middleman server
```


open een nieuw terminal tab met CMD+T en ga weer naar de folder.
Je kan tegelijk in Chrome naar het volgende adres gaan, daar moet je de site zien:

```
localhost:4567
```


# nieuw blog entry

```
middleman article TITLE
```

Nu zie je in Sublime onder blog/ een nieuwe, lege blog ding.
