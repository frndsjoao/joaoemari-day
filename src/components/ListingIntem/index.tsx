import Image from 'next/image'

import styles from './styles.module.scss'

interface ItemProps {
  name: string;
  image: any;
  url?: string;
  description?: string;
}

export default function ListingItem({ name, image, url, description }: ItemProps) {

  return (
    <div id={name} className={`${styles.itemContainer} ${url && styles.hover}`}>
      {url ? (
        <>
          <a href={url}>
            <div className={styles.itemImg}>
              <Image
                src={image}
                alt="Background-image"
                layout='fill'
                width={0}
                height={0}
                priority
                placeholder='blur'
              />
            </div>
            <p className={styles.itemDescription}>Clique aqui</p>
          </a>
        </>
      ) : (
        <>
          <div className={styles.itemImg}>
            <Image
              src={image}
              alt="Background-image"
              layout='fill'
              width={0}
              height={0}
              priority
              placeholder='blur'
            />
          </div>
          <p className={styles.itemDescription}>{description}</p>
        </>
      )}
    </div>
  )
}