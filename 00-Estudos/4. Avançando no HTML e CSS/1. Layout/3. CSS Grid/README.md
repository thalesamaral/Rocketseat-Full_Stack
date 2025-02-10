# 3. CSS Grid

- https://www.youtube.com/watch?v=EiNiSFIPIQE&t=1s&ab_channel=SlayingTheDragon
- https://phosphoricons.com/

## Propriedades Fundamentais

Todo grid é composto de 2 principais grupos:

- Pai: “Container”
- Filho(s): “Item”

### Pai “Container”

- display: grid;
- grid-template
    - grid-template-columns
    - grid-template-rows
    - grid-template-areas

### Filhos

- grid-columns
    - grid-column-start
    - grid-column-end
- grid-row
    - grid-row-start
    - grid-row-end
- grid-area

### Alinhamento Pai

```css
container {
	display: grid;
	
	place-content: space-between;
		/* justify-content: space-between; */
		/* align-content: space-between; */
	    
	place-items: center; */
	  /* justify-items: center; */
	    /* align-items: center; */
}
```

### Alinhamento Filho

```css
.item:nth-child(1) {
	place-self: end;
	  /* align-self: end; */
    /* justify-self: end; */
}
```

### AUTO

- grid-auto-flow
- grid-auto-rows
- grid-auto-columns