import WeightliftingButton from "./_components/(weightlifting)/WeightliftingButton"
import WeightliftingList from "./_components/(weightlifting)/WeightliftingList"


export default function Home() {
    return (
        <section>
            <ul>
                <li>
                    <WeightliftingButton>
                        <WeightliftingList />
                    </WeightliftingButton>
                </li>
            </ul>
        </section>
    )
}