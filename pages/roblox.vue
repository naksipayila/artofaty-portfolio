<script setup lang="ts">
import { robloxProjects, type RobloxGallerySlot } from '~/data/portfolio'
import { type GalleryLightboxItem, useGalleryLightbox } from '~/composables/useGalleryLightbox'

type RobloxGalleryItem = GalleryLightboxItem & {
  id: string
  order: number
  thumbnailPosition: string
  mobileThumbnailPosition: string
  mobileThumbnailAspectRatio: string
  desktopSlot: RobloxGallerySlot
}

const { app } = useRuntimeConfig()
const withBaseURL = (path: string) => /^https?:\/\//.test(path)
  ? path
  : `${app.baseURL}${path.replace(/^\/+/, '')}`

const robloxGalleryItems: RobloxGalleryItem[] = robloxProjects.map((project, order) => {
  const thumbnail = order < 14
    ? project.cover
    : project.thumbnail?.replace('/images/roblox/', '/images/roblox/official-covers/') ?? project.cover
  const cover = withBaseURL(thumbnail)

  return {
    id: project.id,
    src: cover,
    title: project.title,
    order,
    thumbnailPosition: project.thumbnailPosition ?? 'center',
    mobileThumbnailPosition: project.mobileThumbnailPosition ?? project.thumbnailPosition ?? 'center',
    mobileThumbnailAspectRatio: project.mobileThumbnailAspectRatio ?? '1 / 1',
    desktopSlot: project.desktopSlot ?? 'square',
    media: project.video
      ? [{ src: withBaseURL(project.video), type: 'video' as const }]
      : [{ src: cover, type: 'image' as const }]
  }
})
const featuredRobloxGalleryItems = robloxGalleryItems.slice(0, 6)
const secondaryRobloxGalleryItems = robloxGalleryItems.slice(6, 14)
const continuationRobloxGalleryGroups = Array.from(
  { length: Math.ceil((robloxGalleryItems.length - 14) / 12) },
  (_, index) => robloxGalleryItems.slice(14 + index * 12, 26 + index * 12)
)

useSeoMeta({
  title: 'Roblox Portfolio',
  description: 'Roblox character and creature art by Ali Taha Yapışkan.',
  ogTitle: 'Roblox Portfolio | ATY',
  ogDescription: 'Roblox character and creature art by Ali Taha Yapışkan.'
})

const {
  activeItem,
  activeMedia,
  activeMediaIndex,
  closeLightbox,
  handleLightboxClick,
  handleLightboxTouchEnd,
  handleLightboxTouchStart,
  hasNextMedia,
  hasPreviousMedia,
  isReturningToSource,
  lightboxFigureRef,
  lightboxRef,
  lightboxStyle,
  nextMedia,
  openLightbox,
  previousMedia
} = useGalleryLightbox(robloxGalleryItems)
</script>

<template>
  <div class="page-transition">
    <div class="roblox-page">
      <div class="gallery-page__intro">
        <p class="gallery-page__bio">
          I create stylized characters and creatures for Roblox, focusing on expressive silhouettes, readable forms, and game-ready presentation.
          A selection of character art created for the Roblox platform.
        </p>
      </div>

      <div class="roblox-gallery">
        <button
          v-for="item in featuredRobloxGalleryItems"
          :key="item.id"
          class="gallery-item roblox-gallery__item"
          :class="`roblox-gallery__item--${item.desktopSlot}`"
          :style="{ '--gallery-focus': item.thumbnailPosition, '--gallery-mobile-focus': item.mobileThumbnailPosition, '--gallery-mobile-ratio': item.mobileThumbnailAspectRatio }"
          type="button"
          data-cursor="zoom-in"
          :data-gallery-lightbox-index="item.order"
          :aria-label="`Open ${item.title}`"
          @click="openLightbox(item, $event)"
        >
          <img :src="item.src" :alt="item.title" :loading="item.order < 2 ? 'eager' : 'lazy'">
          <span class="gallery-item__title" aria-hidden="true">{{ item.title }}</span>
        </button>
      </div>

      <div class="roblox-gallery roblox-gallery--secondary">
        <button
          v-for="item in secondaryRobloxGalleryItems"
          :key="item.id"
          class="gallery-item roblox-gallery__item"
          :class="`roblox-gallery__item--${item.desktopSlot}`"
          :style="{ '--gallery-focus': item.thumbnailPosition, '--gallery-mobile-focus': item.mobileThumbnailPosition, '--gallery-mobile-ratio': item.mobileThumbnailAspectRatio }"
          type="button"
          data-cursor="zoom-in"
          :data-gallery-lightbox-index="item.order"
          :aria-label="`Open ${item.title}`"
          @click="openLightbox(item, $event)"
        >
          <img :src="item.src" :alt="item.title" loading="lazy">
          <span class="gallery-item__title" aria-hidden="true">{{ item.title }}</span>
        </button>
      </div>

      <div
        v-for="(group, groupIndex) in continuationRobloxGalleryGroups"
        :key="groupIndex"
        class="roblox-gallery roblox-gallery--continuation"
        :class="{ 'roblox-gallery--continuation-final': group.length < 12 }"
      >
        <button
          v-for="item in group"
          :key="item.id"
          class="gallery-item roblox-gallery__item"
          :class="`roblox-gallery__item--${item.desktopSlot}`"
          :style="{ '--gallery-focus': item.thumbnailPosition, '--gallery-mobile-focus': item.mobileThumbnailPosition, '--gallery-mobile-ratio': item.mobileThumbnailAspectRatio }"
          type="button"
          data-cursor="zoom-in"
          :data-gallery-lightbox-index="item.order"
          :aria-label="`Open ${item.title}`"
          @click="openLightbox(item, $event)"
        >
          <img :src="item.src" :alt="item.title" loading="lazy">
          <span class="gallery-item__title" aria-hidden="true">{{ item.title }}</span>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="activeItem"
        ref="lightboxRef"
        class="project-lightbox project-lightbox--reference"
        :class="{ 'project-lightbox--returning': isReturningToSource }"
        data-lenis-prevent
        data-scroll-dismiss-lightbox
        data-cursor="zoom-out"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        :aria-label="activeItem.title"
        :style="lightboxStyle"
        @click="handleLightboxClick"
        @touchstart.passive="handleLightboxTouchStart"
        @touchend="handleLightboxTouchEnd"
      >
        <button class="project-lightbox__dismiss" type="button" aria-label="Close image" @click.stop="closeLightbox">
          <span class="sr-only">Close image</span>
        </button>

        <figure ref="lightboxFigureRef" class="project-lightbox__figure project-lightbox__figure--reference">
          <button
            v-if="hasPreviousMedia"
            class="project-lightbox__hit project-lightbox__hit--previous"
            type="button"
            data-cursor="left-arrow"
            aria-label="Previous item"
            @click.stop="previousMedia"
          >
            <span class="sr-only">Previous item</span>
          </button>

          <video
            v-if="activeMedia?.type === 'video'"
            data-cursor="zoom-out"
            :src="activeMedia.src"
            autoplay
            controls
            loop
            playsinline
          />
          <img v-else-if="activeMedia" data-cursor="zoom-out" :src="activeMedia.src" :alt="activeItem.title">

          <button
            v-if="hasNextMedia"
            class="project-lightbox__hit project-lightbox__hit--next"
            type="button"
            data-cursor="right-arrow"
            aria-label="Next item"
            @click.stop="nextMedia"
          >
            <span class="sr-only">Next item</span>
          </button>
        </figure>
      </div>
    </Teleport>
  </div>
</template>
