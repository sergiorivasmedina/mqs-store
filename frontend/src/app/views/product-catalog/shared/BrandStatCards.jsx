import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const StyledButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    margin: theme.spacing(-1),
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.primary.main,
}))

const IMG = styled('img')(() => ({
    width: '25%',
    maxHeight: '25%',
    borderRadius: '10%'
}))

const BransStatCards = () => {
    let navigate = useNavigate()

    function clickMe() {
        navigate('/details', {state: 'Sergio'})
    }
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={6}>
                <StyledButton onClick={clickMe}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <IMG src='data:image/png;base64,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'alt='Sinotruk'/>
                            <Box ml="12px">
                                <Small>Marca</Small>
                                <Heading>SINOTRUK</Heading>
                            </Box>
                        </ContentBox>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </StyledCard>
                </StyledButton>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledButton onClick={clickMe}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <IMG src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIVFRgSEhUYGBgYHBkYGBwcGBgYHBgYGRkZGhoYGBkcIy4lHB4rIRgYJjgmKy8xNTU1GiU7QDs0Py40NTEBDAwMEA8QHxISHzQrJSY9NjU3ND0/NDQ0NDE2NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMwA9wMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwUGBAj/xABHEAACAQICBgcDCAgEBgMAAAABAgADEQQhBQYHEjFBEyJRYXGBkTJSoRQjQnKCkrHRFzVUYpOywdIWU3OiFTRDY7PwJDPh/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAMEBQIB/8QAKBEAAgIBAwMDBQEBAAAAAAAAAAECAxEEEiExQVETFDIiM2GBoXE0/9oADAMBAAIRAxEAPwCZoiIAiIgCIiAIiIAiIgCJSLwBEpeYa2KpoLuyqO8gfjC5PG0upniaOtrVgF44mn9lt7+W8xf400d+0L91/wC2dbJeGcepDyjoYmmoazYFzZcTSueRcKfQ2M2dLEIwurBh3EH8J44tdUdKcX0ZniUvKzw6ESkrAEREAREQBERAEREAREQBERAEREAREQBERAKSkTV6b01QwqdJVa3ugZsx7FHOepNvCPJSUVlmydgMybCchprX3DUbrR+fcZdUgID3vnfyvOD1i1qxGLJUncpckU8R2ufpfhPPoTVzE4o/NJZObtdV8j9Lyl2GljFbrH+ijPVSk9ta/Z7NKa6Y6tcCp0Sn6NPqn7/telpoGd6jdYs7d5Zz/UyUtE7PMMgBxBas3MXKJf6oNz5mdXg9H0qQ3aVNEA4BVC/hPXqaocQicLTWz5nIg6joPFt7OGrHsPRuB6kAT0nVXSFr/Jn9F/C95OdpWc+9n4R2tDHu2fP9fQ2KT28PWUDmabW9bWnnoYipTbqO6Ee6zIR6ET6HM1+N0Th6wtVpI471BPjfiJ6tbn5RPJaLHMWRbovXzGUrByKyjk2TW+uB+IM7rQWuuFxNlLdFUP0XIFz2K3Bvge6anS+zmkwLYVzTPusS6+Fz1h8fCcDpfQ2Iw7btdCt+DcUb6rfnnO9tF3x4Zxuvp+XKJ8BlRId1b10r4chKparSyyJu6D90niO4+UlXRukKVdBVpMGU8xy7iOR7pTtplW+S5VfGxcdT3RKCVkROIiIAiIgCIiAIiIAiIgCIiAIiIBSUMrPHpLGpRptVqGyopYnw5AcyeyEs8I8bSWWeHWLT1LCUjUfNjkijizW+A7TykM6U0lVxNQ1ap3mOSgcFBOSIOzh4zLp3TFTFVmrPkOCLyRBwA7+ZPaZ3momqfRhcViF+cOaKf+mp+kR7x+AM0Yxjp4bn1ZmylLUT2x6I8mqmol7VsYO9aX4F/wC31ki0qSqAqgAAWAAAAHYBMgErKVlspvMi9XVGtYQlDKzW6e0iMPQqVj9BSQO1uCjzNpwll4RJJ4WTUawa6YfCsadmqOOKray9zMcge7OaX9J1P9nf76/lI3qOzMWc7zMSWJ4kniTLJqQ0UNv1dTJnrJt/T0JL/SfT/Z3+8v5QNp1P9nf7y/lIzid+zq8f0595b5JM/SdT/Z3+8v5TBi9oWHqqUqYRmVuILKQfhOK0VomviW3KCFiPaOQVR2sxyH4zpl2b4sjN6QPZdj8bSGVOng8N4ZIrb5rhZRymOeiXJoI6IfouwYg9gI5eOc9mr+nauEqb9M3Ukb6ng4/o3fOh/Rti/wDMpf7vymt03qXicNTNZirqvtbt7qPeIPKTerTKOxvJF6V0HuxglnRGlKeJpLWpG6t6g8wRyInvvIS1R1hbCVrsSaT5VF427HHePiJNNGoGAZSCpFwRwIPOZt9LqljsadFysj+TNERIScREQBERAEREAREQBERAEREAsMi7aXpvfdcIjdVLNUtzci6qfAG/iR2SRdL41aFGpWbgilvEgZAd5Nh5yBnepWqEm7PUf1Z24DzMt6StOTm+iKWssaShHudTs/0B8oq9PUF6dMiwIyZ+I8hxkuATXaB0WuHoJRX6IzPvMc2PmSZspDda7Jtk1FSrgl3LoiJETlsjranpPKnhVPE9I/gLhQfO5+zJDdrC5yHOQPrBpL5RiKlbiGayfUUALbyF/OWtJXvnnwU9ZZthhdzWRETYMcRE2urmjflOJp0folt5/qLm3qMvOczkoxcn2OoRcpKK7kpaiaL6DCJvDr1PnG+17I8lt8Z08tUWylwmBOTlJyfc34RUYqK7CY6qBgVYAgggg5gg8jMspaeHZCGt+gjhK5RR82/Wpnu5ofq/hadhs003vocI7XZBvJfiUPFfsm3kRN3rtogYjDMALunzlPt3lBuvmLi3h2SJNB6SNCvTrrwRrtbmhyYehM0Yv16Wn1RmSXoXZXRk/S6YqThgGBuCAQe0HO8yTONJFYiIPRERAEREAREQBERAERKQDhtqGO3MOlEHOq2f1U6x+JWcns8wPS4tWIuKSl/teyv4k+U921OvvYinT5IhPm7H+irNpsowtkr1ebOqeSgn8X+E0F9Gmz5MyX16nHgkIS6UlZnmmIiUMA5bX/SnQYR1U2er82vbZh1j5Lf1EhqddtG0p0uJ6JT1aI3fttYsfwHkZyU2NHDbXnyY2rs3zaXYpERLRUEknZboyyvimGbHo0+qDdj6gD7MjimpYhV4sQo8WNh8TJ70Ho8UKFOiv0FAPeeLHzJJ85R1tmI7fJe0Ve6e59jYiViJlmsIiIBawkEa0aP6DFVaQFl3iy/VfrC3dnbyk8GRTtTw27iKdQfTp7p8UY5+j/CWtFLFmPJT1scwz4Ow1Cx3S4KmSc0vTP2Mhf7O7OmkebJ6/Ur0+xlcfaXdP8gkhyK+O2xomolurTKxESImEREAREQBERAEREAREQCG9o7XxzDsRB8CZ2OzFQMHftqP8LCcftJS2OJ7UT+onX7MHBwZX3aj/Gx/rL9v/NHBm0/9L/Z2dpWIlA0ik8GmMcKFCpWOe4jNbtIGQ8zYT3zxaUwS16T0XvuupU24i/Md44+U9jjPJzLO14IBrVWdmdjdmJZj2liSfjLJIR2YvfLFC3K9I3t39eUbZjU/aV/hEfHfmutVSljJjvTW56EfRPTj8I9Go9F7byMVNuB7CPgfOeaWU01lFZpp4ZfScqyuuRUhgewg3HxE7mltLrAANh0J5kOQPSxtODiRzphZ8kSQulD4skAbTqv7Mv8AEb+yd1oHSyYqitdAVDXBB4hgbEd+fOQLeTjqho44fCU6bX3rbzdzOd4jyvaUNXTCtLauS/pLbJye58G9lZSVlE0Ckjnayo3cOee848rCSKZHO1eoLUF53c/AD+sn0v3UV9V9pnl2UN87XX91D/uIkoiRfsoT5yu37qD/AHGSgJ7qvus50n2kViIlctCIiAIiIAiIgCIiAIiIBFe1XD2rUanJkZfNGv8Ag49J69lGKyr0TyKOPMFW9N1fWbbaXgd/C9IBnSZW+yeq34icLqNpEUcYhY2Wp82327bv+4D1mhD69M0uxmT+jUp+SbJWWiXTPNMSkrEAtnnxmIWmjVGNlUFj4AXnpnD7TdKblBaCmzVW63ci5n1O6PC87rjumo+SO2eyDZGOOxbVqj1n9p2LnuvwHlkPKeeIm8lhYMBvLyxERPTw3ep+jPlGKRCLqvXfs3Utl5kqPOTkJwmy/Re5QbEMOtVNl+ouXxbePpO8ExtVZvsx4NrSV7YZ8lYlIlYtFJEu0/F7+KSmOFOmL/Wckkeir6yV2a1yeWcgTTukOnr1a/JmJX6oyX4AS3oo5nu8FLWzxBR8nf7KMPajWqe84UeCKD+Ln0nfiaDUzAdDg6SEWYrvt4v1v6geU34kF0t1jZPRHbWkXRESMmEREAREQBERAEREAREQDy43CrURqbC6urK3gwsZAmPwj0Kr0myamxF/DNW8xYz6EMjnaZoMkDGIPZG7VA936LeXCWtJYoy2voynq6t0dy6o6nVTTAxOHSp9MdVx2OuR9eI8ZvJCmpmsHySt1yeieyuMzu+64HdmD3Hukz03BAKm4OYIzBBkeoq9Of4JNNcrI/lGaJS8oTICwUYyEtdNJ9Pi3YG6p82ngvE+bb3wkna36cXDUGO9ao4K0xz3iLb1uwcbyEpoaGvlyZna63pFCIiaZmCZ8FhXq1EpJ7TsFHdfn4Dj5TBO52YaL36z4lh1aY3V73bifJf5pFdPZBsmphvmkSZgcKtJEpqLKihR4AWnoEqBKTCb7m6lhYRWLyxnAFybAce6aDEa46PRtw11JvY7oZwPFlBHxynqi30R45xj1Z49oemegw5poevWug7lt129MvORrqxos4nEpStdb7z9yLmb+PDznS69aFxNWocZTbpqRUbu7mUUDkAesL3Nx29k6HZ5oI0KPTVBapVsbHiqD2V8+J8pdjKNVPD5ZQlGVt3K4R2Ki0uiJRNEREQBERAEREAREQBERAEREApMOIpK6lXAKsCpBFwQciD3TNKGBjJCGter7YOrYAmk2dNvjuMfeHxGcw4PWbHUlWnTrsqLko3abWHYCyk2kz6V0ZSxFM0qq7yn1B5EHke+Q1rHq/Vwb7rDeQ33HAyI7D2MOzumlRdC1KM1yZV9Mqnuh0Mv+MtJftLfcpf2yn+MtJftDfcpf2zxaJrYZWAxVJnQ/SVmVl77AgMPjJF0bqjomuoqUd51PZVfI9hF7g9xklrqrfMf4R1xss6S/pGGKxdSqxeq7Ox5sST4DsHdMEmL/AGj/cb+I/5x+j/R/uP/ABH/ADnK1lSWEmdvRWvrgh2JMX6P9H+4/wDEf84/R/o/3H/iP+c997D8nnsbPwQ+iEkKoJJIAAFySeAA7ZOGqeivk2GSkfatvP8AWbM+mQ8pborVXB4dt+lSG/yYlnI8N4m3lN7Kmp1Hq8LoW9NpnXy+pWUMreavTOmqGGXfrMB7qjNm7lXnKqTbwi25KKyzidp2mHDJhEJCld+pY+1c2VT3ZE+YkdyQ9ctGDF0k0jhbt1Rvrz3B2D3lzBH/AKdJqlqm+KYVKl1oA5ngXsfZXu7WmpRZXXVl9V1/0yboTnbx0fT/AA32zBcVZizH5PYhQ3N7j2OwDO/f4GSMBMOGwyU1VKahVUWAGQAmcTOtnvk3g06obIpZLoiJwSCIiAIiIAiIgCIiAIiIAiIgCUlYgFJ5cbg6dVTTqqHVuIIuJ6pSE8HjSawyJ9ZNQ6tImphb1E4lOLr4e8Pj4zlcBjqtB9+k7U3GRtlw+iwPHwM+grTSaZ1ZwmJuaiWb316rDz5+d5dr1XG2ayijZo+d0HhnG6I2kOtlxVMN+8mR8ShNvQzrcBrhgKoG7WCk8muh+OXoZxmlNnNdLnD1Fcclbqt4b3An0nM4zV7GUvbw7jvChx6pcTt1UWcxeCNW318SWSc6WKRvZdW8GB/CZN6fOroVNmBXuIKn4waxIsXNuzeNpz7LxI796+8T6Er4yknt1FXxYD8TNFj9dsBSv87vnsQF/iMh5mQzTpM/sKX+qpb8BNvg9WMdVtuYd7Hm1kHjdiPhPfaQj85Hnu7JcRidBpfaLWe64ZBTHvNZm8hwHxnHu9WvUuxepUc25sx7gJ2+jNm7mxxNUKOa08z99hb4TudEaCw2GFqFNVPM8WPixznrupqWILLOVTda8zeEaDUDQuJw6P05AV7FafEqebE8BcWy7p2FNAosAAByAsB4S+0CUZzcm2+5oQgoRSRWViJydiIiAIiIAiIgCIiAIiUJgFYnlxWOpUherUSmO12VB6sZ56WncIxCpiaDE8AKqEnwAMA2US0NLS68yPWAZIliuDwIPnDuBxIHibQC+JjFRTwI9RLyYBWJYXHMj1lFcHgQfOAXyhEulCYBiaip4qD4gGWfI6fuL91fylWxdMZM6g97Af1lPl1H/MT76/nPcs82rwZFpqOCgeAEvtMdOujC6sGA4kEG3jaX9IvaPUTwYLrSsoDLWcDjB6XxLOkXtHqJcDAKxMZqAcSPWA4PAg+YgGSJQGWlwOJHrAL4lge/CVLW4wC6JZ0i9o9RL4AiIgCcHta1hr4PCKcO269VxT3sroN1mJW44m1r8rzvJzut1HAVqPybHVERKma71QIwKkWdCeYJHdnnxgHzNSJxFdRXr7pdgrVKhZgoJ9pjmbD/ANtOux+zHFBFq4KrSxikgEUmAK3BIPWNiuXbe5GXOejG7NUZ9zAY/DVi19xGcK5AF7DduGOXcJz2ldT9J4IdNVoOiqQekVlYKeR3kJ3YB3WoGB07gq6JUoVThmIV1ZkYIpy3163V3eOXEXynFbTv1pivrr/Is2eqe0vG4Z1WvUavQuAwfrMFP0lc53HGxveazaf+tMV9df8AxpAO+2BOoTF3IHWo8SB9GpPFt8cGrhLEHqVeBB+kk4PVvVHGY4O2FQMKZUNd1Sxa5HtHPgZbrJqpi8BuDFoq9JvbtnV77u7f2Tl7QgG62PfrSj9Wp/IZ9FaQxlOjTetUO6iKWY9gAuZ867Hv1pS+rU/kM63bdrPfd0bSb3Xr5+aIfgx+zAI21j0vVx+KfEMCWqNZEAJIQZIgA4m3ZxN5sdn2sjYDGI7ZU3Ip1hbghPteKnPyPbMuzjSOAw2J+VY1nBpj5pVQuC5BBZrdgJt3m/Ka7XOthKmLqVcEzGlUO/ZlKlXa5cAHle5HjblAPqZXuAQbg2IPaDwkFbS9oWIqVqmEwtRqdGmSjMvVaowybrcQoNxYWvbOdbsa1m+UYc4Ko3zmHACfvUeC/dPV8N2QbpfCPSr1aVS++jsrXFiSGIv58fOAbHQOq+NxxY4ekzgGzOSFUMc7Fm4nu45zf/ok0v8A5dP+KkkXZNrJgjgqeG30p1ae8GRmClrsW31J9oG+fYb9073/AIphv8+l/ET84BwOpOreJwOjcZRxSqrMKrjdZXupoBeI71OUgBDYgz6z0xiUfC4goyuBSqg7rBrHcbI2nyYnEeIgE+bMNfxilGExTWxCDqMbAVlXt7HA4jmM+2cNtS12+WVPk+Hf/wCPTPEcKrg+33qOC+Z7Jqte9T6mj6oZbtQqZ0n7CRc037GGfiM+21cTqdUo6M/4hXurO6LST/tsGJdx32Fh3X5wDX6g/rLCf69P+afVJNp8rag/rLCf69P+aTRtd1o+SYXoKZtWxAZRa91p8Ha44HMKPE9kAivadrR8uxbdG16NG6U+xj9J++5GXcB3zQaJx9bBYmnXVStSkwbda4uCM1PYGViPtTJqwcKMRTbGkigp33CqWLbuapbsJ49150G07S+j8ZWXE4N23mXcqqyFQd32XBPO2RH7ogH0FobSVPE0aeJpG6VFDL2i/EHsINwfCQdtyJGPSx/6K/zNNhsV1n3KjaOqt1ahL0b3yqAXZL8gQLjvB5ma7bn/AM+n+iv8zQDSaka7V9H1MiXoMfnKZPlvITwYDyPPuljaJpajitCVsRh3Do3RWIyIPTUwVYcmF7ESIdXdUa2Nw9evh+s9BkumQLqysTun3hbhzmnw+kK1KnVw4YhKu6KiEZEowYGx4MCvHxgGTVlj8swuZ/8Avo8/+4s+t58j6tf85hf9ej/5Fn1xAEREATlNetT6ekqKozdHUS5pva9t6wZSOamw58hOrlpgHzvi9lumKDhqCLU3TdXp1VQgg5HrsrA+F5TFap6yV16OsuJqLx3XxKstxwJDvafRcQCFdU9kVQOtXSLKEUhuiU7xbgQrtwAvxAvftmPXXZrpHFY2viaIpbjsCt6ljYIozFsuBk2xAI+2U6p4rR64hcSEBqNTK7rb2Shgb5Ze0Jh2r6n4vSBw5wwQ9GKu9vNu+30drZZ+yZI8QCFtSdn+ksFilxTrSbcSpZRV4syEKDlkL2uZp8fsv0xWqPWq9CzuxZiavEk35jh3dk+gYgHE6B2caOpUKdOvh6dWoFHSOwJLOc2tnwByHcJg1n2cYKrhqiYWhTpVrb1NlFusMwpOfVPCd9KQCDNWNn2mcFiKeJprR6h6y9LbfQ5Mpy5j0IBnZa+bOKWPb5RSbosRYBja6VABYb4GYYZDeHLkeUgxAPnN9k2lgSBTpt3iqtj4XsZYdk2l/wDKT+Kn5z6PlYBHGz/VbF4XAYrC11VXqtUKAMrAh6KoLkcMxI9XZFpUEHdo5f8Ad/8AyfREQDxYrR9KtTFKvTV16pKsAw3lsQbHsM53aToCvjcH8mwwXf30brNugKoa+du8TsJSAQZqtsw0lh8Zh8RUFLcp1EdrVLndU3NhbMzNrfqDpjH4p8SwpBSd2mvS+xTXJV9njzPeTJtlBAI41K2Z4ajh7aQo06tZmJN+sEXgqqcuQufGbvGbPdFujIuFpoWUgOoO8hIyZc+I4zrZWAfPtDZTpem61KZpBkYMjCpYgqbhvZ7uE6HX3UbSWPrUq6pSVhRRagNTIVATvbuWa55SYIgEfbKtVMVgErriQgNRkK7rb3shgb5ZcZ5touzdcYflOE3UxH0weqlUdpI4OO3nz7ZJUQCA9D7K9J08RRquKW6lWm7WqXNlcMbC3YJPspKwBERAP//Z' alt='Shacman'/>
                            <Box ml="12px">
                                <Small sx={{ lineHeight: 1 }}>
                                    Marca
                                </Small>
                                <Heading>SHACMAN</Heading>
                            </Box>
                        </ContentBox>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </StyledCard>
                </StyledButton>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledButton onClick={clickMe}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <IMG src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Cummins_logo.svg/255px-Cummins_logo.svg.png' alt='Cummins'/>
                            <Box ml="12px">
                                <Small>Marca</Small>
                                <Heading>CUMMINS</Heading>
                            </Box>
                        </ContentBox>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </StyledCard>
                </StyledButton>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledButton onClick={clickMe}>
                    <StyledCard elevation={6}>
                        <ContentBox>
                            <IMG src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu86Clh7900U2sX0XZVX_H8HiXCx4BSdbXYw&usqp=CAU' alt='Sitrak' />
                            <Box ml="12px">
                                <Small>Marca</Small>
                                <Heading>SITRAK</Heading>
                            </Box>
                        </ContentBox>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </StyledCard>
                </StyledButton>
            </Grid>
        </Grid>
    )
}

export default BransStatCards
