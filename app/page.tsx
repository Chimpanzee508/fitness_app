import BagworkButton from "./_components/(bagwork)/BagworkButton"
import BagworkList from "./_components/(bagwork)/BagworkList"
import ClassScheduleButton from "./_components/(class_schedule)/page"
import RoadWorkButton from "./_components/(roadwork)/RoadWorkButton"
import RoadWorkList from "./_components/(roadwork)/RoadWorkList"
import WeightliftingButton from "./_components/(weightlifting)/WeightliftingButton"
import WeightliftingList from "./_components/(weightlifting)/WeightliftingList"
import styles from './home.module.css'

export default function Home() {
    return (
        <section className={styles.nav}>
            <ClassScheduleButton />
            <BagworkButton>
                <BagworkList />
            </BagworkButton>
            <WeightliftingButton>
                <WeightliftingList />
            </WeightliftingButton>
            <RoadWorkButton>
                <RoadWorkList />
            </RoadWorkButton>
        </section>
    )
}